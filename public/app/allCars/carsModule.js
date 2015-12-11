var carsModule = angular.module('carsModule', [
    'ui.router'
]);

carsModule.config([
    '$stateProvider',
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        $stateProvider.state('cars', {
            url: '/cars',
            templateUrl: 'app/allCars/cars.html',
            controller: 'carsCtrl',
            resolve: {
               carsPromise: ['carsService', function(carsService){
                   return carsService.getAll();
               }]
            }
        });

        $urlRouterProvider.otherwise('cars');
    }
]);
