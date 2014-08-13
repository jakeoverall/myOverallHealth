var myHealthApp = angular.module('myHealthApp');

myHealthApp.controller('medicationsCtrl', ['$scope', 'parseService', function ($scope, parseService) {

    
    var getMeds = function () {
        parseService.getMeds().then(function(res) {
            console.log(res);
            $scope.medications = res;
        });
    };



    //---------------------------------Edit Medication---------------------------------------------------------------------------

    $scope.editForm = false;
    var med = {};
    $scope.updateMed = function (med) {
        parseService.setMed(med).then(function (res) {
            parseService.med = res;
            $scope.editForm = true;
            med = parseService.med.data;
            $scope.med = med;
        });
    };
    
    $scope.routes = ['PO - By Mouth', 'PR - Per Rectum', 'TOP - Apply Topically', 'INJ - Inject SubQ or IM', 'OU - Both Eyes ', 'OD - Rigth Eye', 'OS - Left Eye', 'AU - Both Eyes', 'AD - Right Ear', 'AS - Left Ear', 'INH - Inhaled'];

    $scope.editMed = function () {
        parseService.updateMed($scope.med).then(function (res) {
            getMeds();
            $scope.editForm = false;
        });
    };

    $scope.cancel = function () {
        $scope.editForm = false;
    };
   
    $scope.discontinueMedication = function (med) {
        med.active = false;
        if (med.dcDate === null) {
            med.dcDate = new Date();
        }
        parseService.updateMed(med).then(function () {
            getMeds();
        });
    };


    $scope.activateMed = function(med) {
        med.active = true;
        parseService.updateMed(med).then(function () {
            getMeds();
        });
    };

    $scope.removeMedication = function(med) {
        parseService.removeMedication(med).then(function () {
            getMeds();
        });
    };


    //---------------------------------------------------------------------------------------------------------------

    getMeds();

}]);