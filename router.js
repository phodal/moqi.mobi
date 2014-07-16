define([
    'jquery',
    'underscore',
    'backbone',
    'js/HomeView.js',
    'js/ProductPage.js'
],function($, _, Backbone, HomeView, ProductPage){

    var AppRouter = Backbone.Router.extend({
        routes: {
            'index':'homePage',
            'product':'productPage',
            '*actions': 'homePage'
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

        Backbone.history.start();
    };
    return {
      initialize: initialize
    };
});