define([
    'jquery',
    'underscore',
    'mustache',
    'text!/templates/about.html',
    'json!/configure.json',
    'js/FooterView',
    'mdown!/info/about.md'
],function($, _, Mustache, aboutTemplate, configure, FooterView, aboutMD){

    var AboutView = Backbone.View.extend ({
        el: $("#content"),

        initialize: function(){

        },
        render: function(){
            var about = {
                about: aboutMD
            };
            console.log(about);
            this.$el.html(Mustache.to_html(aboutTemplate, about));

            var footerView = new FooterView();
            footerView.render();
        }
    });

    return AboutView;
});