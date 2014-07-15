// Filename: app.js
define(['jquery', 'underscore', 'mustache', "text!/templates/nav.html", "json!http://api.phodal.net/blog/page/1"], function($, _, Mustache, navTemplate, blogPosts){

    var initialize = function() {
        var template = navTemplate;

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

        var html = Mustache.to_html(template, info);
        $('#blogArea').html(html);
    };

    return {
        initialize: initialize
    };
});