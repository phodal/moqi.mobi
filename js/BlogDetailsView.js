define([
    'jquery',
    'underscore',
    'mustache',
    'js/ProductsView',
    'json!/configure.json',
    'text!/templates/blog_details.html',
    'js/renderBlog'
],function($, _, Mustache, ProductsView, configure, blogDetailsTemplate, GetBlog){

    var BlogDetailsView = Backbone.View.extend ({
        el: $("#content"),

        initialize: function () {
            this.params = '#content';
        },

        getBlog: function(slug) {
            var getblog = new GetBlog(this.params, configure['blogPostUrl'] + slug, blogDetailsTemplate);
            getblog.renderBlog();
        }
    });

    return BlogDetailsView;
});