require.config({
    baseUrl: '/',
    paths: {
        'text': 'lib/text',
        jquery: 'lib/jquery-2.1.1.min',
        async: 'lib/require/async',
        json: 'lib/require/json',
        mdown: 'lib/require/mdown',
        router: 'router',
        templates: 'templates',
        jquerySidr: 'lib/jquery.sidr.min',
        markdownConverter : 'lib/require/Markdown.Converter',
        touchwipe: 'lib/jquery.touchwipe.min',
        underscore: 'lib/underscore',
        mustache: 'lib/mustache',
        backbone: 'lib/backbone'
    },
    shim: {
        jquerySidr:["jquery"],
        touchwipe: ["jquery"],
        underscore: {
            exports: '_'
        }
    }
});

require(['app'], function(App){
    App.initialize();
});