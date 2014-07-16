define([
    'jquery',
    'underscore',
    'backbone',
    'js/HomeView.js'
],function($, _, Backbone, HomeView){

    var AppRouter = Backbone.Router.extend({
        routes: {
            'index':'homePage',
            '*actions': 'homePage'
        }
    });

    var initialize = function() {
        var app_router = new AppRouter;

        app_router.on('route:homePage', function(){
            var homeView = new HomeView();
            homeView.render();
        });
        Backbone.history.start();
    };
    return {
      initialize: initialize
    };
});