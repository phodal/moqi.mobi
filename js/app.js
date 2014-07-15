// Filename: app.js
define(['jquery', 'underscore', 'mustache', "text!/templates/nav.html", "text!/index.html", "json!http://api.phodal.net/blog/page/1"],
    function($, _, Mustache, navTemplate, indexTemplate,blogPosts){

    var initialize = function() {
        this.template = navTemplate;
        this.indexTemplate=indexTemplate;

        var info = [];

        $.each(blogPosts,function(key,val){
            var results=[];
            results.title = val["title"];
            results.description = val["description"];
            results.slug = val["slug"];
            results.keywords = val["keywords"];
            results.created = val["created"];
            info.push(results);
        });

        console.log(info);

        var html = Mustache.to_html(this.template, info);
        $('#blogArea').html(html);

        var seoinfo ={
            description:"墨颀移动 CMS移动平台的CMS解决方案",
            keywords:"移动CMS,移动CMS框架,移动平台CMS,移动CMS系统",
            title:"墨颀 CMS - 移动平台的CMS解决方案"
        };
        $('head').html(Mustache.to_html(this.indexTemplate, seoinfo));
    };

    return {
        initialize: initialize
    };
});