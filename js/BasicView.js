define([
    'jquery',
    'underscore',
    'mustache',
    'text!/templates/basic.html'
],function($, _, Mustache, basicTemplate ){
    var BasicView = Backbone.View.extend ({
        el: $("#basic"),

        initialize: function(){

        },
        render: function(){
            this.$el.html(Mustache.to_html(basicTemplate, {
                data:"data"
            }));

        }
    });

    return BasicView;
});