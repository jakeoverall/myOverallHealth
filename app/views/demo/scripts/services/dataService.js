var myHealthApp = angular.module('myHealthApp');

myHealthApp.factory('dataService', function ($q, $timeout) {
    return {
        data: {},
        load: function (id) {
            var defer = $q.defer();
            var data = this.data;
            $timeout(function () {
                data.id = id;
                defer.resolve(data);
            }, 1000);
            return defer.promise;
        }
    };
});