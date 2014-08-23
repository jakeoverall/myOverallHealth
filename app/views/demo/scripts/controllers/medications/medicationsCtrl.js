var myHealthApp = angular.module('myHealthApp');

myHealthApp.controller('medicationsCtrl', ['$scope', 'firebaseService', 'medicationsRef', function ($scope, firebaseService, medicationsRef) {
    debugger;
    $scope.profiles.medications = medicationsRef.$asArray();
    ////var getMeds = function () {
    ////    parseService.getMeds().then(function(res) {
    ////        console.log(res);
    ////        $scope.medications = res;
    ////    });
    ////};

    ////---------------------------------New Medication---------------------------------------------------------------------------
    //$scope.formShow = false;
    //$scope.addMeds = function () {
    //    $scope.formShow = !$scope.formShow;
    //};

    //$scope.routes = ['PO - By Mouth', 'PR - Per Rectum', 'TOP - Apply Topically', 'INJ - Inject SubQ or IM', 'OU - Both Eyes ', 'OD - Rigth Eye', 'OS - Left Eye', 'AU - Both Eyes', 'AD - Right Ear', 'AS - Left Ear', 'INH - Inhaled'];

    //$scope.route = 'PO - By Mouth';

    //$scope.addMed = function () {
    //    var med = {
    //        name: this.name,
    //        strength: this.strength,
    //        quantity: this.quantity,
    //        route: this.route,
    //        frequency: this.frequency,
    //        startDate: this.startDate,
    //        rxNumber: this.rxNumber,
    //        notes: this.notes,
    //        profileId: $scope.profile.objetId,
    //        infoUrl: 'http://www.drugs.com/search.php?searchterm=' + this.name,
    //        active: true
    //    };

    //    //parseService.addMed(med).then(function (res) {
    //    //    document.getElementById('addMedicationForm').reset();
    //    //    $scope.addMedicationForm.$setPristine();
    //    //    getMeds();
    //    //    $scope.formShow = false;
    //    //});
    //};

    //$scope.cancel = function () {
    //    document.getElementById('addMedicationForm').reset();
    //    $scope.addMedicationForm.$setPristine();
    //    $scope.formShow = false;
    //};

    ////---------------------------------Edit Medication---------------------------------------------------------------------------

    //$scope.editForm = false;
    //var med = {};
    //$scope.updateMed = function (med) {
    //    parseService.setMed(med).then(function (res) {
    //        parseService.med = res;
    //        $scope.editForm = true;
    //        med = parseService.med.data;
    //        $scope.med = med;
    //    });
    //};

    //$scope.editMed = function () {
    //    //parseService.updateMed($scope.med).then(function (res) {
    //    //    getMeds();
    //    //    $scope.editForm = false;
    //    //});
    //};

    //$scope.cancelEdit = function () {
    //    $scope.editForm = false;
    //};

    //$scope.discontinueMedication = function (med) {
    //    med.active = false;
    //    if (med.dcDate === null) {
    //        med.dcDate = new Date();
    //    }
    //    //parseService.updateMed(med).then(function () {
    //    //    getMeds();
    //    //});
    //};


    //$scope.activateMed = function(med) {
    //    med.active = true;
    //    //parseService.updateMed(med).then(function () {
    //    //    getMeds();
    //    //});
    //};

    //$scope.removeMedication = function(med) {
    //    if (confirm('Are you sure you want to delete ' + med.name + ' ?')) {
    //        //parseService.removeMedication(med).then(function () {
    //        //    getMeds();   
    //        //});
    //    }
    //};

    //getMeds();

}]);