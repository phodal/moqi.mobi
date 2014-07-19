define([
    'jquery',
    'underscore',
    'mustache',
    'text!/templates/about.html',
    'json!/configure.json',
    '../../js/FooterView'
],function($, _, Mustache, aboutTemplate, configure, FooterView){

    var AboutView = Backbone.View.extend ({
        el: $("#content"),

        initialize: function(){

        },
        render: function(){
            this.$el.html(Mustache.to_html(aboutTemplate, configure));

            var footerView = new FooterView();
            footerView.render();
        }
    });

    return AboutView;
});