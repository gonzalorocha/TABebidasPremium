var app = angular.module('app.routes', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/productList', {
            templateUrl: '/views/productList/productList.html',
            controller: 'productListController',
            controllerAs: 'pl'
        })

    $locationProvider.html5Mode(true);
}]);
