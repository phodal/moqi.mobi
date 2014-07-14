require.config({
    baseUrl: 'lib/',
    paths: {
        // the left side is the module ID,
        // the right side is the path to
        // the jQuery file, relative to baseUrl.
        // Also, the path should NOT include
        // the '.js' file extension. This example
        // is using jQuery 1.9.0 located at
        // js/lib/jquery-1.9.0.js, relative to
        // the HTML page.
        jquery: 'jquery-2.1.1.min'
    },
    shim: {
        underscore: {
            exports: '_'
        }
    }
});

require(['../js/app'], function(App){
    // The "app" dependency is passed in as "App"
    App.initialize();
});