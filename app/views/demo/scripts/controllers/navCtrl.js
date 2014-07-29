myHealthApp.controller('navCtrl', ['$scope', function ($scope) {
    $scope.nav = [{
        'name': 'Download',
        'link': '/app/views/index.html#/download'
    }, {
        'name': 'Back',
        'link': '/app/views/index.html'
    }];
}]);