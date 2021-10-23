const Article = require("./article.model");
describe("Article class Tests", () => {
  it("Should return validation error for createArticle", () => {
    const article = new Article(
      null,
      "5",
      "Man in the city",
      "555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555"
    );
    const a = article.createArticle();
    expect(a).toBe('"date" is required');
  });

  it("Should return validation error for updateArticle", () => {
    const article = new Article(
      null,
      "5",
      "Man in the city",
      "555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555",
      new Date()
    );
    const a = article.updateArticle();
    expect(a).toBe('"id" contains an invalid value');
  });
});
