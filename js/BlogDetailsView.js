define([
    'jquery',
    'underscore',
    'mustache',
    '../../js/ProductsView',
    'json!/configure.json',
    'text!/index.html',
    "text!/templates/blog_posts.html"
],function($, _, Mustache, ProductsView, configure, indexTemplate, blogPostsTemplate){

    var BlogDetailsView = Backbone.View.extend ({
        el: $("head"),

        initialize: function () {
        },

        getBlog: function(slug) {
            console.log(slug);
        },

        render: function(){

            var html = Mustache.to_html(indexTemplate, configure["seoinfo"]);
            this.$el.html(html);
        }
    });

    return BlogDetailsView;
});