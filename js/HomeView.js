define([
        'jquery',
        'underscore',
        'mustache',
        'text!/index.html',
        'text!/templates/about.html',
        'json!/configure.json',
        'text!/templates/product.html',
        '../../js/HomePageDetailView',
        '../../js/ProductsView',
        '../../js/FooterView',
        '../../js/AboutView',
        'jquerySidr'
],function($, _, Mustache, indexTemplate, aboutTemplate, configure, productTemplate, HomePageDetailView, ProductsView, FooterView, AboutView){

        var HomeView = Backbone.View.extend ({
            el:$('#aboutArea'),

            render: function(){
                $(document).ready(function() {
                    $('#menu').sidr();
                });

                var homepage = new HomePageDetailView();

                var footerView = new FooterView();
                footerView.render();

                var aboutView = new AboutView();
                aboutView.render();

                var html = Mustache.to_html(indexTemplate, configure);
                this.$el.html(html);
            }
        });

    return HomeView;
});