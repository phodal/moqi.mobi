define([
    'jquery',
    'underscore',
    'mustache',
    'text!/templates/homepage_detail.html',
    'json!/configure.json',
    'mdown!/info/aboutCMS.md',
    '../../js/getBlog'
],function($, _, Mustache,blogPostsTemplate, configure, aboutCMS, GetBlog){

    var HomePageDetailView = Backbone.View.extend ({

        initialize: function(){
            var params='#content';
            var about = {
                about:aboutCMS,
                aboutcompany:configure["aboutcompany"]
            };
            var getblog = new GetBlog(params, '/1.json', blogPostsTemplate);
            getblog.getBlog(about);
        }
    });

    return HomePageDetailView;
});