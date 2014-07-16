define([
    'jquery',
    'underscore',
    'mustache',
    'text!/templates/index.html',
    'json!http://api.phodal.net/blog/page/1',
    'json!/configure.json',
    'text!/templates/product.html',
    '../../js/ProductsView',
    '../../js/FooterView'
],function($, _, Mustache, indexTemplate, blogPosts, configure, productTemplate, ProductsView, FooterView){

    var ProductPage = Backbone.View.extend ({
        el:$('head'),

        initialize: function(){

        },
        render: function(){
            this.$el.html(html);

            var productsView = new ProductsView();
            productsView.render();

            var footerView = new FooterView();
            footerView.render();

            var html = Mustache.to_html(indexTemplate, configure["seoinfo"]);
        }
    });

    return ProductPage;
});