require.config({
    paths: {
        jquery: 'jquery'
    },
    shim: {
        underscore: {
            exports: '_'
        }
    }
});

require(['app'], function(App) {
    App.initialize();
});