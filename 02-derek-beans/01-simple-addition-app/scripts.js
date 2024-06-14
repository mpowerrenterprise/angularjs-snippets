var app=angular.module("app1",[]);

app.controller("ctrl1",function($scope){


	$scope.first=0;
	$scope.second=0;

	$scope.calculateFunction=function(){

		$scope.total = $scope.first + " + " + $scope.second + " = " + (+$scope.first + +$scope.second);
		document.getElementById("display").style.display="block";
	}


});