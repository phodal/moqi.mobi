require.config({
    baseUrl: 'lib/',
    paths: {
        'text': 'text',
        jquery: 'jquery-2.1.1.min',
        async: 'require/async',
        json: 'require/json'
    },
    shim: {
        underscore: {
            exports: '_'
        }
    }
});

require(['../js/app'], function(App){
    App.initialize();
});