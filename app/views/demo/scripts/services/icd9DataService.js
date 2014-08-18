var myHealthApp = angular.module('myHealthApp');

myHealthApp.service('icd9DataService', function($http) {
    this.find = function (dx) {
        var s = 'https://api.aqua.io/codes/beta/icd9.json?utf8=✓&q%5Bdescription_cont%5D=' + dx;
        return $http({ 'method': 'GET', 'url': s }).then(function (res) {
            var modifyResults = function (diagnosis) {
                diagnosis.dxUrl = 'http://www.google.com/#q=' + diagnosis.description.split(' ').join('+');
            };
            res.data.map(modifyResults, res);
            return res.data;
        });
    };
});