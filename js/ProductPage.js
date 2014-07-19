define([
    'jquery',
    'underscore',
    'mustache',
    'json!/configure.json',
    'text!/templates/product.html',
    '../../js/ProductsView',
    '../../js/FooterView'
],function($, _, Mustache, configure, productTemplate, ProductsView, FooterView){

    var ProductPage = Backbone.View.extend ({
        initialize: function(){

        },
        render: function(){
            var productsView = new ProductsView();
            productsView.render();

            var footerView = new FooterView();
            footerView.render();
        }
    });

    return ProductPage;
});