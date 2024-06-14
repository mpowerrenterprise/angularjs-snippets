var app=angular.module("app1",[]);

app.controller("ctrl1",function($scope){

	$scope.randnum1 = Math.floor((Math.random() * 10) +1);
	$scope.randnum2 = Math.floor((Math.random() * 10) +1);


});