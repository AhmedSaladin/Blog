export default class Article {
  constructor(id = null, title, body, author, date) {
    this.id = id;
    this.title = title;
    this.body = body;
    this.author = author;
    this.date = date;
  }
}
