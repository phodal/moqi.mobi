require.config({
    baseUrl: 'lib/',
    paths: {
        '!text': 'lib/text',
        jquery: 'jquery-2.1.1.min',
        'templates': '../templates'
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