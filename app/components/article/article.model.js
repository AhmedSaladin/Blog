import Joi from "joi";

const new_blog_schema = Joi.object({
  title: Joi.string().required().min(3),
  body: Joi.string().required().min(50),
  author: Joi.number().required(),
  date: Joi.date().required(),
});
const update_blog_schema = new_blog_schema.keys({
  id: Joi.number().required(),
});
export default class Article {
  constructor(id = null, title, body, author, date) {
    this.id = id;
    this.title = title;
    this.body = body;
    this.author = author;
    this.date = date;
  }
  createArticle() {
    return new_blog_schema.validate(
      this.title,
      this.body,
      this.author,
      this.date
    );
  }
  updateArticle() {
    return update_blog_schema.validate(
      this.id,
      this.title,
      this.body,
      this.author,
      this.date
    );
  }
}
