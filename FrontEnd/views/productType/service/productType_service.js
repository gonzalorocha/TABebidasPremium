angular
    .module('app')
    .service('productTypeService',productTypeService);

function productTypeService($http){
    //var success = false;

    this.getType = function(){
        return $http.get('/api/product_type').then(function(res){
            return res.data;
        }).catch(function(err){
            console.log(err);
        })
    };

    this.addType = function(productType){
        $http.post('/api/product_type',productType).then(function(res){
            //success=true;
            console.log('Agregado Tipo');
        }).catch(function(err){
            console.log(err)
        })
    };

    this.deleteProductType = function(id){
        $http.delete('/api/product_type/'+id).then(function(res){
            console.log('Eliminado Tipo');
        }).catch(function(err){
            console.log(err);
        })

    }
};