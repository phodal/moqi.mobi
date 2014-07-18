define([
    'jquery',
    'underscore',
    'mustache',
    'json!http://api.phodal.net/blog/page/1',
    'json!/configure.json',
    'text!/templates/product.html',
    '../../js/ProductsView',
    '../../js/FooterView'
],function($, _, Mustache, blogPosts, configure, productTemplate, ProductsView, FooterView){

    var ProductPage = Backbone.View.extend ({
        el:$('head'),

        initialize: function(){

        },
        render: function(){
            this.$el.html();

            var productsView = new ProductsView();
            productsView.render();

            var footerView = new FooterView();
            footerView.render();
        }
    });

    return ProductPage;
});