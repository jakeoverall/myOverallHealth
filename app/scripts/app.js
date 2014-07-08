var myHealth = angular.module('myHealth', []);

myHealth.controller('navCtrl', ['$scope', function ($scope) {
    $scope.nav = [{
        'name': 'Home'
    }, {
        'name': 'Download'
    }, {
        'name': 'Demo'
    },{
        'name': 'About'
    }, {
        'name': 'Contact'
    }];
}]);



$('#myTab a').click(function (e) {
    e.preventDefault();
    $(this).tab('show');
});

$(function () {
    $('#myTab a:last').tab('show');
})