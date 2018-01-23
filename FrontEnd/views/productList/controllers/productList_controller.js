var app = angular.module('app');
app.controller('productListController',function($scope,$location,productListService){
    var pl = this;
    productListService.getProduct().then(function(products){
        pl.products = products;
    });
    $scope.pl=pl
})