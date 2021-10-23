const bcrypt = require("bcryptjs");

exports.hashing = (password) => {
  const hashed_password = bcrypt.hash(password, 10);
  return hashed_password;
};

exports.check_password = (password, db_password) => {
  const is_true = bcrypt.compare(password, db_password);
  return is_true;
};
