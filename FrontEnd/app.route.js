var app = angular.module('app.routes', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '/views/index/index.html'
        })

        .when('/productList', {
            templateUrl: '/views/productList/productList.html',
            controller: 'productListController',
            controllerAs: 'pl'
        })

        .when('/productType',{
            templateUrl: '/views/productType/productType.html',
            controller: 'productTypeController',
            controllerAs: 'pt'            
        })



    $locationProvider.html5Mode(true);
}]);
