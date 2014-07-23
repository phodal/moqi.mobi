define([
    'jquery',
    'underscore',
    'mustache',
    'text!/templates/homepage_detail.html',
    'json!/configure.json',
    'mdown!/info/aboutCMS.md'
],function($, _, Mustache,blogPostsTemplate, configure, aboutCMS){

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

    var HomePageDetailView = Backbone.View.extend ({
        el: $("#content"),

        initialize: function(){
            this.getBlog();
        },

        getBlog: function() {
            var url = urlConfig["blogListUrl"];
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
            var about = {
                about:aboutCMS,
                aboutcompany:urlConfig["aboutcompany"]
            };
            response.push(about);
            this.$el.html(Mustache.to_html(blogPostsTemplate, response));
        }
    });

    return HomePageDetailView;
});