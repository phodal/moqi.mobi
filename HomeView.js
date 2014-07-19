define([
    'jquery',
    'underscore',
    'mustache',
    'text!/index.html'
], function($, _, Mustache, indexTemplate) {

    var HomeView = Backbone.View.extend({
        el: $('#aboutArea'),

        render: function() {
            var data = {
                project: "My Sample Project"
            };
            this.$el.html(Mustache.to_html(indexTemplate, data));
        }
    });

    return HomeView;
});