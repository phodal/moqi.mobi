define([
    'jquery',
    'underscore',
    'mustache',
    'text!/templates/moqi.html',
    '../../js/FooterView',
    'mdown!/info/about.md'
],function($, _, Mustache, moqiTemplate, FooterView, aboutMoqi){
    var BasicView = Backbone.View.extend ({
        el: $("#content"),

        initialize: function(){

        },
        render: function(){
            var data = {
                data:aboutMoqi
            };
            this.$el.html(Mustache.to_html(moqiTemplate, data));

            var footerView = new FooterView();
            footerView.render();

        }
    });

    return BasicView;
});