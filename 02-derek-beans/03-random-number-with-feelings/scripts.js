var app1 = angular.module("app1",[]);

app1.controller("badFeeling",function($scope){

	var randNum = Math.floor((Math.random()*4));
	var badFeelingArr = ["Fear","Anger","Sadness","Disgust"];

	$scope.feelingBad = badFeelingArr[randNum];

});

app1.controller("goodFeeling",function($scope){

	var randNum=Math.floor((Math.random())*4);
	var goodFeelingArr=["joy","happy","surprice","Good"];
	$scope.feelingGood = goodFeelingArr[randNum];

});