const User = require('../models/user');
const { hashing, check_password } = require('../utility/password');
const { create_token } = require('../utility/create_token');
const { user_schema } = require('../utility/validation');

module.exports = {

    sign_up: async (req, res, next) => {
        try {
            await user_schema.validateAsync(req.body);
            const found = await User.findOne({ where: { email: req.body.email } });
            if (found) { res.status(400).send({ message: 'This email is already registered.' }) }
            else {
                const user = {
                    first_name: req.body.first_name,
                    last_name: req.body.last_name,
                    email: req.body.email,
                    password: await hashing(req.body.password),
                    birth_date: new Date(req.body.birth_date)
                };
                await User.create(user);
                res.status(201);
                res.send({ message: 'Account created.' });
            }
        } catch (err) {
            next(err);
        }
    },

    sign_in: async (req, res, next) => {
        try {
            const { email } = req.body;
            const { password } = req.body;
            const user = await User.findOne({ where: { email } });
            if (!user) {
                res.status(400)
                res.send({ message: "Email or password isn't correct." })
            }
            else {
                const tokken = await create_token(user.id);
                const is_true = await check_password(password, user.password);
                if (is_true) {
                    res.status(200);
                    res.send({ message: 'Go on explore what you want.', tokken: tokken })
                } else {
                    res.status(400)
                    res.send({ message: "Email or password isn't correct." })
                }
            }
        } catch (err) {
            next(err);
        }
    },

    profile: async (req, res, next) => {
        try {
            const user = await User.findOne({
                where: { id: req.user }
            });
            if (user) {
                res.status(200);
                res.send({
                    pic: user.pic,
                    email: user.email,
                    first_name: user.first_name,
                    last_name: user.last_name,
                    birth_date: user.birth_date
                });
            }
        } catch (err) {
            next(err);
        }
    },

    update_profile: async (req, res, next) => {
        try {
            const id = req.user;
            const query = req.query.edit;
            const user = await User.findOne({ where: { id } });
            switch (query) {
                case 'password':
                    const id = req.user;
                    const { password } = req.body;
                    new_password = await hashing(password);
                    await user.update({
                        password: new_password
                    });
                    break;
                case 'firstname':
                    const { first_name } = req.body;
                    await user.update({ first_name });
                    break;
                case 'lastname':
                    const { last_name } = req.body;
                    await user.update({ last_name });
                    break;
                case 'birthdate':
                    const { birth_date } = req.body;
                    await user.update({ birth_date: new Date(birth_date) });
                    break;
                case 'pic':
                    const { pic } = req.body;
                    await user.update({ pic });
                    break;
                default:
                    throw new Error('Enter valid query.');
            }
            res.status(200);
            res.send({ message: `Profile updated.` });
        } catch (err) {
            next(err);
        }
    }
}