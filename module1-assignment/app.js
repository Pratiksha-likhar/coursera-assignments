(function () {

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
 function LunchCheckController($scope) {
 	$scope.items = "";
 	

 	$scope.check = function () {

 		var number = $scope.items.split(",");

 		if(number == "") {
 			$scope.message = "Please enter data first." ;
 		}
 		else if (number.length <= 3) {
 			$scope.message = "Enjoy!";
 		}
 		else {
 			$scope.message = "Too much!";
 		}
 		
 		
 	};

 	
 };


}) ();