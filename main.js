require.config({
    baseUrl: 'lib/',
    paths: {
        'text': 'text',
        jquery: 'jquery-2.1.1.min',
        async: 'require/async',
        json: 'require/json',
        mdown: 'require/mdown',
        router: '../router',
        templates: '../templates',
        jquerySidr: 'jquery.sidr.min',
        markdownConverter : 'require/Markdown.Converter'
    },
    shim: {
        jquerySidr:["jquery"],
        underscore: {
            exports: '_'
        }
    }
});

require(['../app'], function(App){
    App.initialize();
});