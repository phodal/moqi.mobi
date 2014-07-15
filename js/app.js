// Filename: app.js
define(['jquery', 'underscore', 'mustache', "text!/templates/blog_posts.html", "text!/index.html", "json!http://api.phodal.net/blog/page/1",
        "json!/configure.json", "text!/templates/product.html"],

    function($, _, Mustache, blogPostsTemplate, indexTemplate, blogPosts, configure, productTemplate){

        var initialize = function() {
            this.template = blogPostsTemplate;
            this.indexTemplate = indexTemplate;
            this.productTemplate = productTemplate;
            this.config = configure;

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

            $('#products').html( Mustache.to_html(this.productTemplate, this.config["product"]));
            console.log(Mustache.to_html(this.template, this.config["product"]));
            var partials = {"products": "mo"};

            var html = Mustache.to_html(this.template, info, partials);
//            console.log(html);
            $('#blogArea').html(html);
            $('head').html(Mustache.to_html(this.indexTemplate, this.config["seoinfo"]));

        };

        return {
            initialize: initialize
        };

    });