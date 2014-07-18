define([
    'jquery',
    'underscore',
    'mustache',
    "text!/templates/blog_posts_lists.html",
    "json!/configure.json"
],function($, _, Mustache,blogPostsTemplate, configure){

    this.urlConfig = configure;
    var BlogPostModel = Backbone.Model.extend({
        name: 'Blog Posts',
        url: function(){
            return this.instanceUrl;
        },
        initialize: function(props){
            this.instanceUrl = props;
        }
    });

    var BlogPostView = Backbone.View.extend ({
        el: $("#content"),

        initalize: function(){
            getBlog("1.json");
        },

        getBlog: function(slug) {
            url = urlConfig["blogListUrl"] + slug;
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
            var info = [];

            console.log(response);

            var parseDate = function(dateTime){
                var date = new Date(dateTime);
                return date.getFullYear() +'年'+ (date.getMonth()+1) +'月'+ date.getDate() + '日';
            };

            this.$el.html(Mustache.to_html(blogPostsTemplate, info));
        }
    });

    return BlogPostView;
});