angular.module('rentCarsApp').factory('cars', [
    '$http',
    'auth',
    function($http, auth) {

        var obj = {
            cars: []
        };

        obj.getAll = function() {
            return $http.get('/allcars').success(function(data) {
                angular.copy(data, obj.cars);
            });
        };

        obj.create = function(car) {
            return $http.post('/allcars', car).success(function(data){
                obj.cars.push(data);
            });
        };

        obj.getCarInfo = function(id) {
            return $http.get('/allcars/' + id).then(function(res) {
                return res.data;
            });
        };

        obj.addOrder = function(id, order) {
            return $http.post('/allcars/' + id + '/allorders', order);
        }

        return obj;
    }
]);
