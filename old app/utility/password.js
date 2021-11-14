const bcrypt = require('bcryptjs');

exports.hashing = (password) => {
    try {
        const hashed_password = bcrypt.hash(password, 10);
        return hashed_password;
    } catch (err) {
        console.error(err.toString());
    }
};

exports.check_password = (password, db_password) => {
    try {
        const is_true = bcrypt.compare(password, db_password);
        return is_true;
    } catch (err) {
        console.error(err.toString());
    }
}