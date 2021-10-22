const Joi = require("joi");

const user_password_schema = Joi.object({
  password: Joi.string().required().min(8),
});

const new_user_schema = user_password_schema.keys({
  first_name: Joi.string().required().min(3),
  last_name: Joi.string().required().min(3),
  email: Joi.string().required(),
  avatar: Joi.string(),
  birth_day: Joi.date(),
});

const update_user_schema = new_user_schema.keys({
  id: Joi.number().required(),
});

module.exports = class User {
  constructor(
    id = null,
    first_name,
    last_name,
    email,
    password,
    avatar,
    birth_day
  ) {
    this.id = id;
    this.first_name = first_name;
    this.last_name = last_name;
    this.email = email;
    this.password = password;
    this.avatar = avatar;
    this.birth_day = birth_day;
  }

  createUser() {
    const { error, value } = new_user_schema.validate({
      first_name: this.first_name,
      last_name: this.last_name,
      email: this.email,
      password: this.password,
      avatar: this.avatar,
      birth_day: this.birth_day,
    });
    if (error) return this.validationError();
    return value;
  }

  updateUserInfo() {
    const { error, value } = update_user_schema.validate({
      id: this.id,
      first_name: this.first_name,
      last_name: this.last_name,
      email: this.email,
      avatar: this.avatar,
      birth_day: this.birth_day,
    });
    if (error) return this.validationError();
    return value;
  }

  updatePassword(password) {
    this.password = password;
    const { error, value } = user_password_schema({ password: this.password });
    if (error) this.validationError();
    return value;
  }

  validationError(error) {
    return error.details[0].message;
  }
};
