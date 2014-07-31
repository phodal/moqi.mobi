define(['jquery', 'underscore', 'mustache'],
    function($, _, Mustache){

    var RenderBlog = function (params, url, template) {
        this.params = params;
        this.url = url;
        this.template = template;
    };

    var BlogPostModel = Backbone.Model.extend({
        name: 'Blog Posts',
        url: function(){
            return this.instanceUrl;
        },
        initialize: function(props){
            this.instanceUrl = props;
        }
    });

    RenderBlog.prototype.renderBlog = function(addInfo) {
        var that = this;
        var collection = new BlogPostModel;

        collection.initialize(this.url);
        collection.fetch({
            success: function(collection, response){
                if(addInfo !== undefined){
                    response.push(addInfo);
                }
                RenderBlog.prototype.render(that.params, that.template, response);
            }
        });
    };

    RenderBlog.prototype.render = function(params, template, response) {
        $(params).html(Mustache.to_html(template, response));
    };

    return RenderBlog;
});