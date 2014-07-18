define([
    'jquery',
    'underscore',
    'mustache',
    'text!/templates/footer.html',
    'json!/configure.json'
],function($, _, Mustache, footerTemplate, configure){

    var FooterView = Backbone.View.extend ({
        el: $("#footer"),

        render: function(){
            this.$el.html(Mustache.to_html(footerTemplate, configure["seoinfo"]));
        }
    });

    return FooterView;
});