var app = angular.module('app');
app.controller('productTypeController',function($scope,$location,productTypeService){
    var pt = this;
    productTypeService.getType().then(function(product_types){
        pt.product_types = product_types;
    });

    pt.agregar=function(){
        console.log(pt.newType);
        productTypeService.addType(pt.newType);
    };

    $scope.pt=pt


})