define([
    'jquery',
    'underscore',
    'backbone',
    'router',
    'jquerySidr'
], function($, _, Backbone, Router){

    var initialize = function(){
        $(document).ready(function() {
            $('#sidr').show();
            $('#menu').sidr();
            $("#sidr li a" ).bind('touchstart click', function() {
                if(null != Backbone.history.fragment){
                    _.each($("#sidr li"),function(li){
                        $(li).removeClass()
                    });

                    $('a[href$="#/'+Backbone.history.fragment+'"]').parent().addClass("active");
                    $.sidr('close');
                    window.scrollTo(0,0);
                }
            });
        });
        Router.initialize();
    };

    return {
        initialize: initialize
    };
});
