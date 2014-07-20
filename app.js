define([
    'jquery',
    'underscore',
    'backbone',
    'router',
    'jquerySidr'
], function($, _, Backbone, Router){

    var initialize = function(){
        $(document).ready(function() {
            $('#menu').sidr();
        });
        Router.initialize();
    };

    return {
        initialize: initialize
    };
});
