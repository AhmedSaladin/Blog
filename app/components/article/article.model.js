const Joi = require("joi");

const new_blog_schema = Joi.object({
  title: Joi.string().required().min(3),
  body: Joi.string().required().min(50),
  author: Joi.number().required(),
  date: Joi.date().required(),
});

const update_blog_schema = new_blog_schema.keys({
  id: Joi.number().required().not(null),
});

module.exports = class Article {
  constructor(id = null, author, title, body, date) {
    this.id = id;
    this.author = author;
    this.title = title;
    this.body = body;
    this.date = date;
  }

  createArticle() {
    const { error, value } = new_blog_schema.validate({
      title: this.title,
      body: this.body,
      author: this.author,
      date: this.date,
    });
    if (error) return this.validationError(error);
    return value;
  }

  updateArticle() {
    const { error, value } = update_blog_schema.validate({
      id: this.id,
      title: this.title,
      body: this.body,
      author: this.author,
      date: this.date,
    });
    if (error) return this.validationError(error);
    return value;
  }

  validationError(error) {
    return error.details[0].message;
  }
};
