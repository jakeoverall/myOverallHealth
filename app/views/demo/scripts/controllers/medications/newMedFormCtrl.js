var myHealthApp = angular.module('myHealthApp');

myHealthApp.controller('newMedFormCtrl', function ($scope, $modal) {
        
    $scope.open = function (size) {
        debugger;
        var modalInstance = $modal.open({
            templateUrl: '/app/views/demo/views/medications/form.html',
            controller: MedicationModalInstanceCtrl,
            size: size,
            resolve: {
                items: function () {
                    return $scope.items;
                }
            }
        });        
    };
});

// Please note that $modalInstance represents a modal window (instance) dependency.
// It is not the same as the $modal service used above.

var MedicationModalInstanceCtrl = function ($scope, $modalInstance, parseService) {

    var Medication = function (name, strength, quantity, route, frequency, startDate, rxNumber, notes, profileId) {
        this.name = name;
        this.strength = strength;
        this.quantity = quantity;
        this.route = route;
        this.frequency = frequency;
        this.startDate = startDate;
        this.rxNumber = rxNumber;
        this.notes = notes;
        this.profileId = profileId;
    };

    $scope.routes = ['PO - By Mouth', 'PR - Per Rectum', 'TOP - Apply Topically', 'INJ - Inject SubQ or IM', 'OU - Both Eyes ', 'OD - Rigth Eye', 'OS - Left Eye', 'AU - Both Eyes', 'AD - Right Ear', 'AS - Left Ear', 'INH - Inhaled' ];

    $scope.route = 'PO - By Mouth';

    $scope.addMed = function () {
        debugger;
        var med = new Medication($scope.name, $scope.strength, $scope.quantity, $scope.route, $scope.frequency, $scope.startDate, $scope.rxNumber, $scope.notes, profile.objectId);
        parseService.addMed(med).then(function (res) {
            console.log(res);
            //getMeds();
            $modalInstance.close($scope.selected.item);
        });
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
};