angular
    .module('app')
    .service('productTypeService',productTypeService);

function productTypeService($http){
    this.getType = function(){
        return $http.get('/api/product_type').then(function(res){
            console.log(res);
            return res.data;
        }).catch(function(err){
            console.log(err);
        })
    };

    this.addType = function(productType){
        $http.post('/api/product_type',productType).then(function(res){
            console.log('Agregado Tipo');
        }).catch(function(err){
            console.log(err)
        })
    };
};