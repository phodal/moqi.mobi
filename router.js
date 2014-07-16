define([
    'jquery',
    'underscore',
    'backbone',
    'js/HomeView.js',
    'js/ProductPage.js'
],function($, _, Backbone, HomeView, ProductPage){

    var AppRouter = Backbone.Router.extend({
        routes: {
            'index': 'homePage',
            'product': 'productPage',
            '*actions': 'homePage',
            'blog(/:slug)': 'blog'
        },
        blog: function(slug){
            console.log(slug);
        }
    });
    var initialize = function() {
        var app_router = new AppRouter;

        app_router.on('route:homePage', function(){
            var homeView = new HomeView();
            homeView.render();
        });

        app_router.on('route:productPage', function(){
            var productPage = new ProductPage();
            productPage.render();
        });

        app_router.on('route:blog', function(){
            var productPage = new ProductPage();
            productPage.render();
            console.log("details");
        });

        Backbone.history.start();
    };
    return {
      initialize: initialize
    };
});