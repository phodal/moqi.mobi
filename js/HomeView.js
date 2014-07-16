define([
        'jquery',
        'underscore',
        'mustache',
        "text!/templates/blog_posts.html",
        "text!/index.html",
        "json!http://api.phodal.net/blog/page/1",
        "json!/configure.json",
        "text!/templates/product.html"],function($, _, Mustache, blogPostsTemplate, indexTemplate, blogPosts, configure, productTemplate){

        var HomeView = Backbone.View.extend ({

            render: function(){
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
                $('#products').html(Mustache.to_html(productTemplate, configure["product"]));
                console.log(Mustache.to_html(productTemplate, configure["product"]))

                var html = Mustache.to_html(blogPostsTemplate, info);
                $("#blogArea").html(html);
            }
        });

    return HomeView;
});