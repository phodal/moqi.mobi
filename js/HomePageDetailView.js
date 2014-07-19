define([
    'jquery',
    'underscore',
    'mustache',
    "text!/templates/homepage_detail.html",
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
            var parseDate = function(dateTime){
                var date = new Date(dateTime);
                return date.getFullYear() +'年'+ (date.getMonth()+1) +'月'+ date.getDate() + '日';
            };

            _.each(response, function(data,index){
                data["created"] = parseDate(data["created"]);
            });

            var about = {
                about:urlConfig["about"],
                aboutcompany:urlConfig["aboutcompany"]
            };
            response.push(about);
            this.$el.html(Mustache.to_html(blogPostsTemplate, response));
        }
    });

    return HomePageDetailView;
});