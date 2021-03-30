require('dotenv').config();
const jwt = require('jsonwebtoken');

exports.create_token = (key) => {
    try {

        const decoded = jwt.sign({
            id: key
        },
            process.env.SECRET,
            {
                expiresIn: '1d'
            }
        );
        return decoded;
    } catch (err) {
        throw Error(err);
    }
}