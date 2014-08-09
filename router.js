define([
    'jquery',
    'underscore',
    'backbone',
    'js/HomeView.js',
    'js/ProductPage.js',
    'js/BlogDetailsView.js',
    'js/AboutView.js',
    'js/MoqiView.js',
    'js/PageViewHelper.js',
    'q'
],function($, _, Backbone, HomeView, ProductPage, BlogDetailsView, AboutView, MoqiView, PageViewHelper, Q){

    var AppRouter = Backbone.Router.extend({
        routes: {
            'index': 'homePage',
            'product': 'productPage',
            'blog/*slug': 'blog',
            'about':'about',
            'project': 'project',
            '*actions': 'homePage'
        }
    });
    var initialize = function() {
        var app_router = new AppRouter;

        var pageViewHelper = new PageViewHelper(app_router);

        pageViewHelper.addRouterOn('route:homePage', HomeView);

        pageViewHelper.addRouterOn('route:productPage', ProductPage);

        pageViewHelper.addRouterOn('route:about', AboutView);

        pageViewHelper.addRouterOn('route:project', MoqiView);

        app_router.on('route:blog', function(blogSlug){
            var blogDetailsView = new BlogDetailsView();
            blogDetailsView.getBlog(blogSlug);
        });

        Backbone.history.start();
    };
    return {
      initialize: initialize
    };
});