define([
    'jquery',
    'underscore',
    'mustache',
    'text!/templates/homepage_detail.html',
    'json!/configure.json',
    'mdown!/info/aboutCMS.md',
    'js/renderBlog'
],function($, _, Mustache,blogPostsTemplate, configure, aboutCMS, RenderBlog){

    var HomePageDetailView = Backbone.View.extend ({

        initialize: function(){
            var params = '#content';
            var about = {
                about: aboutCMS,
                aboutcompany: configure["aboutcompany"]
            };
            var blogView = new RenderBlog(params, 'http://api.phodal.net/blog/page/1', blogPostsTemplate);
            blogView.renderBlog(about);
        }
    });

    return HomePageDetailView;
});