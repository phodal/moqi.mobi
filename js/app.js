// Filename: app.js
define(['jquery', 'underscore', 'mustache', "text!/templates/nav.html"], function($, _, Mustache, navTemplate){

    var initialize = function() {
        var info = {
            firstName: "Phodal",
            lastName: "Huang",
            blogURL: "http://www.phodal.com",
            Run:"python -m SimpleHTTPServer 8000"
        };
        var template = navTemplate;
        var html = Mustache.to_html(template, info);
        $('#sampleArea').html(html);
    };

    return {
        initialize: initialize
    };
});