define([
        'jquery',
        'underscore',
        'mustache',
        'text!/index.html',
        'json!http://api.phodal.net/blog/page/1',
        'json!/configure.json',
        'text!/templates/product.html',
        '../../js/BlogPostView',
        '../../js/ProductsView'
],function($, _, Mustache, indexTemplate, blogPosts, configure, productTemplate, BlogPostView, ProductsView){

        var HomeView = Backbone.View.extend ({
            el:$('head'),

            render: function(){
                var blogPostView = new BlogPostView();
                blogPostView.render();

                var productsView = new ProductsView();
                productsView.render();

                this.$el.html(Mustache.to_html(indexTemplate, configure["seoinfo"]));
            }
        });

    return HomeView;
});