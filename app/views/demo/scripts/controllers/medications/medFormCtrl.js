var myHealthApp = angular.module('myHealthApp');

var newMedModal = function ($scope, $modalInstance, parseService, $route) {

    //var Medication = function (name, strength, quantity, route, frequency, startDate, rxNumber, notes, profileId) {
    //    this.name = name;
    //    this.strength = strength;
    //    this.quantity = quantity;
    //    this.route = route;
    //    this.frequency = frequency;
    //    this.startDate = startDate;
    //    this.rxNumber = rxNumber;
    //    this.notes = notes;
    //    this.profileId = profileId;
    //    this.active = true;
    //};

    $scope.routes = ['PO - By Mouth', 'PR - Per Rectum', 'TOP - Apply Topically', 'INJ - Inject SubQ or IM', 'OU - Both Eyes ', 'OD - Rigth Eye', 'OS - Left Eye', 'AU - Both Eyes', 'AD - Right Ear', 'AS - Left Ear', 'INH - Inhaled'];

    $scope.route = 'PO - By Mouth';

    $scope.addMed = function () {
        debugger;
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
        //var med = new Medication(this.name, this.strength, this.quantity, this.route, this.frequency, this.startDate, this.rxNumber, this.notes, $route.current.params.id);
        parseService.addMed(med).then(function (res) {
            $modalInstance.close();
        });
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
};

var editMedModal = function ($scope, $modalInstance, parseService) {
    var med = parseService.med.data;
    $scope.med = med;

    $scope.routes = ['PO - By Mouth', 'PR - Per Rectum', 'TOP - Apply Topically', 'INJ - Inject SubQ or IM', 'OU - Both Eyes ', 'OD - Rigth Eye', 'OS - Left Eye', 'AU - Both Eyes', 'AD - Right Ear', 'AS - Left Ear', 'INH - Inhaled'];

    $scope.editMed = function () {
        parseService.updateMed($scope.med).then(function (res) {
            $modalInstance.close();
        });
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
};