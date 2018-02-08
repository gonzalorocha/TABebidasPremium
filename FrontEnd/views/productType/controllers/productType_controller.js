var app = angular.module('app');
app.controller('productTypeController',function($scope,$location,productTypeService){
    
    var pt = this;
    
    pt.refresh = function(){
        productTypeService.getType().then(function (product_types) {
            pt.product_types = product_types;
        });
     };    

    pt.agregar = function(){
        productTypeService.addType(pt.newType);
        pt.refresh();
    };

    pt.eliminar = function(id){
        productTypeService.deleteProductType(id);
        pt.refresh();
    };
    
    // pt.modificar = function(){
    //     productTypeService.modificar(pt.)
    // }

    pt.refresh();

    $scope.pt= pt
})