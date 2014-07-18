define([
    'jquery',
    'underscore',
    'mustache',
    '../../js/ProductsView',
    'json!/configure.json',
    'text!/templates/blog_details.html',
    "text!/templates/blog_posts.html"
],function($, _, Mustache, ProductsView, configure, blogDetailsTemplate, blogPostsTemplate){

    var BlogPostModel = Backbone.Model.extend({
        name: 'Blog Posts',
        url: function(){
            return this.instanceUrl;
        },
        initialize: function(props){
            this.instanceUrl = props;
        }
    });

    var BlogDetailsView = Backbone.View.extend ({
        el: $("#content"),

        initialize: function () {
        },

        getBlog: function(slug) {
            url = configure["baseurl"] + "blog/" + slug;
            var that = this;
            collection = new BlogPostModel;
            collection.initialize(url);
            collection.fetch({
                success: function(collection, response){
                    that.render(response);
                }
            });
        },

        render: function(response){
            this.$el.html(Mustache.to_html(blogDetailsTemplate, response));
        }
    });

    return BlogDetailsView;
});