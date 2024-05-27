'use strict';

/**
 * A set of functions called "actions" for `article-category`
 */

module.exports = {
  async getArticleCategory(ctx, next) {
    try {
      const { page, pageSize } = ctx.query;
      const data = await strapi
        .service("api::article-category.article-category")
        .getArticleCategory({page,pageSize});
      console.log(data, "data");

      ctx.body = data;
    } catch (err) {
      ctx.badRequest("Get article controller error", { moreDetails: err });
    }
  },
};
