export default class Favorite {
  constructor(id = null, user_id, article_id) {
    this.id = id;
    this.user_id = user_id;
    this.article_id = article_id;
  }
}
