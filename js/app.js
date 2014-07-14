// Filename: app.js
define(['jquery', 'underscore', 'mustache'], function($, _, Mustache){
    var initialize = function() {
        var person = {
            firstName: "Phodal",
            lastName: "Huang",
            blogURL: "http://www.phodal.com"
        };
        var template = "<h1>{{firstName}} {{lastName}}</h1>Blog: {{blogURL}}";
        var html = Mustache.to_html(template, person);
        $('#sampleArea').html(html);
    }

    return {
        initialize: initialize
    };
});