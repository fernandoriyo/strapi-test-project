'use strict';

/**
 * article-category service
 */

module.exports = {
    getArticleCategory:async(params)=>{
        try{
            const {page,pageSize} = params;
            const data = await strapi.entityService.findPage('api::article.article',{
                page:page ?? 1,
                pageSize:pageSize ?? 10,
                fields:['id','Title','Content'],
                populate:{
                    category:{
                        fields:["Name"]
                    }
                }
            });

            const dataMap = data.results.map((item)=>{
                return {
                    id:item["id"],
                    Title:item["Title"],
                    Content:item["Content"],
                    category:item["category"]["Name"]
                }
            });
            const dataResponse = {
                result:dataMap,
                pagination:data.pagination
            }
            return dataResponse;
        }catch(e){
            return e;
        }
    }
}
