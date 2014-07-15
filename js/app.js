// Filename: app.js
define(['jquery', 'underscore', 'mustache', "text!/templates/nav.html"], function($, _, Mustache, navTemplate){

    var initialize = function() {
        var template = navTemplate;

        var info = {
            title: "This is a blog test",
            description: "Is there a way to take the JSON from a $.getJSON() call and assign it",
            slug: "http://www.phodal.com",
            keywords:"python -m SimpleHTTPServer 8000",
            created:"2014-02-02"
        };

        var blog_posts=[];
        var title = [];
        var description = [];
        var slug = [];
        var keywords = [];
        var created = [];
        $.getJSON( "http://api.phodal.net/blog/page/1", function( data ) {
            $.each( data, function(key, val) {
                title.push(val["title"]);
                description.push(val["description"]);
                slug.push(val["slug"]);
                keywords.push(val["keyword"]);
                created.push(val["created"]);
            });
        });

        var html = Mustache.to_html(template, info);
        $('#sampleArea').html(html);
    };

    return {
        initialize: initialize
    };
});