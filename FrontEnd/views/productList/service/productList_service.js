angular
    .module('app')
    .service('productListService',productListService);

function productListService($http){
    this.getProduct = function(){
        return $http.get('/api/product').then(function(res){
            console.log(res);
            return res.data;
        }).catch(function(err){
            console.log(err);
        })
    }
};