define([
    'jquery',
    'underscore',
    'mustache',
    'text!/templates/footer.html',
    'json!/configure.json'
],function($, _, Mustache, footerTemplate, configure){

    var BlogPostView = Backbone.View.extend ({
        el: $("#footer"),

        render: function(){
            var html = Mustache.to_html(footerTemplate, configure["seoinfo"]);
            this.$el.append(html);
        }
    });

    return BlogPostView;
});