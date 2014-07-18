define([
        'jquery',
        'underscore',
        'mustache',
        'text!/index.html',
        'text!/templates/about.html',
        'json!/configure.json',
        'text!/templates/product.html',
        '../../js/BlogPostView',
        '../../js/ProductsView',
        '../../js/FooterView',
        '../../js/AboutView'
],function($, _, Mustache, indexTemplate, aboutTemplate, configure, productTemplate, BlogPostView, ProductsView, FooterView, AboutView){

        var HomeView = Backbone.View.extend ({
            el:$('head'),

            render: function(){
                var blogPostView = new BlogPostView();
                blogPostView.render();

                var footerView = new FooterView();
                footerView.render();

                var aboutView = new AboutView();
                aboutView.render();

                var html = Mustache.to_html(indexTemplate, configure["seoinfo"]);

                this.$el.html(html);
            }
        });

    return HomeView;
});