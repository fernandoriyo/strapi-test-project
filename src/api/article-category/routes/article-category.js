module.exports = {
  routes: [
    {
      method: "GET",
      path: "/articles-category",
      handler: "article-category.getArticleCategory",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
