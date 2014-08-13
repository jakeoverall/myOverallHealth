var myHealthApp = angular.module('myHealthApp');

var newMed = function ($scope, parseService, $route) {

    $scope.formShow = false;
    $scope.addMeds = function () {
        $scope.formShow = !$scope.formShow;
    };

    $scope.routes = ['PO - By Mouth', 'PR - Per Rectum', 'TOP - Apply Topically', 'INJ - Inject SubQ or IM', 'OU - Both Eyes ', 'OD - Rigth Eye', 'OS - Left Eye', 'AU - Both Eyes', 'AD - Right Ear', 'AS - Left Ear', 'INH - Inhaled'];

    $scope.route = 'PO - By Mouth';

    $scope.addMed = function () {
        var med = {
            name: this.name,
            strength: this.strength,
            quantity: this.quantity,
            route: this.route,
            frequency: this.frequency,
            startDate: this.startDate,
            rxNumber: this.rxNumber,
            notes: this.notes,
            profileId: $route.current.params.id,
            active: true
        };
        
        parseService.addMed(med).then(function (res) {
            document.getElementById('addMedicationForm').reset();
            $scope.addMedicationForm.$setPristine();
            $scope.formShow = false;
        });
    };

    $scope.cancel = function () {
        document.getElementById('addMedicationForm').reset();
        $scope.addMedicationForm.$setPristine();
        $scope.formShow = false;
    };
};