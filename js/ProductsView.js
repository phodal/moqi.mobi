define([
    'jquery',
    'underscore',
    'mustache',
    'text!/templates/product.html',
    'json!/configure.json'
],function($, _, Mustache, ProductTemplate, configure){

    var BlogPostView = Backbone.View.extend ({
        el: $("#products"),

        render: function(){
            var html = Mustache.to_html(ProductTemplate, configure);
            this.$el.append(html);
        }
    });

    return BlogPostView;
});