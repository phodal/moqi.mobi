// Filename: app.js
define(['jquery', 'underscore', 'mustache', "text!/templates/nav.html"], function($, _, Mustache, navTemplate){

    var initialize = function() {
        var person = {
            firstName: "Phodal",
            lastName: "Huang",
            blogURL: "http://www.phodal.com"
        };
        var template = "<h1>{{firstName}} {{lastName}}</h1>Blog: {{blogURL}}";
        var html = Mustache.to_html(template, person);
        $('#sampleArea').html(html);
    };

    return {
        initialize: initialize
    };
});