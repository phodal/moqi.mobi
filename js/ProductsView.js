define([
    'jquery',
    'underscore',
    'mustache',
    'text!/templates/product.html',
    'json!/configure.json'
],function($, _, Mustache, ProductTemplate, configure){

    var BlogPostView = Backbone.View.extend ({
        el: $("#content"),

        render: function(){
            var html = Mustache.to_html(ProductTemplate, configure);
            this.$el.html(html);
        }
    });

    return BlogPostView;
});