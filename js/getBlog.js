define(['jquery', 'underscore', 'mustache'],function($, _, Mustache){

    var BlogPostModel = Backbone.Model.extend({
        name: 'Blog Posts',
        url: function(){
            return this.instanceUrl;
        },
        initialize: function(props){
            this.instanceUrl = props;
        }
    });

    this.GetBlog = function(params, url, template) {
        this.params = params;
        this.url = url;
        this.template = template;
    };

    GetBlog.prototype.getBlog = function(addInfo) {
        var template = this.template;
        var params = this.params;
        var url = this.url;
        var collection = new BlogPostModel;

        collection.initialize(url);
        collection.fetch({
            success: function(collection, response){
                if(addInfo !== undefined){
                    response.push(addInfo);
                }
                GetBlog.prototype.render(params, template, response);
            }
        });
    };

    GetBlog.prototype.render = function(params, template, response) {
        $(params).html(Mustache.to_html(template, response));
    };

    return GetBlog;
});