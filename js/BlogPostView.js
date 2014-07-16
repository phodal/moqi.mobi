define([
    'jquery',
    'underscore',
    'mustache',
    "text!/templates/blog_posts.html",
    "json!http://api.phodal.net/blog/page/1"
],function($, _, Mustache, blogPostsTemplate, blogPosts){

    var BlogPostView = Backbone.View.extend ({
        el: $("#blogArea"),

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

            var html = Mustache.to_html(blogPostsTemplate, info);
            this.$el.append(html);
        }
    });

    return BlogPostView;
});