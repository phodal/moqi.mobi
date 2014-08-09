define([
    'jquery',
    'underscore',
    'mustache'
],function($, _, Mustache){

    var AppRouter = Backbone.Router.extend({});
    this.pageView = [];
    this.app_router = new AppRouter;
    var that = this;

    var PageViewHelper = Backbone.View.extend ({
        el: $("#basic"),

        initialize: function(router){
            that.app_router = router;
        },
        addRouterOn: function(routerPath, PageView){
            that.app_router.on(routerPath, function () {
                var pageView = new PageView;
                pageView.render();
            });
            return this;
        },
        render: function(){

        }
    });

    return PageViewHelper;
});