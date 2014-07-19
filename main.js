require.config({
    paths: {
        'text': 'text',
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