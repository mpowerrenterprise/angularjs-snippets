var app=angular.module("myModule",[]);
	
app.controller("myController",function($scope){

	var employees = [

		{name:"joker",dateOfBirth:new Date("November 23,1980"),gender:"Male",salary:2200.780},
		{name:"hacker",dateOfBirth:new Date("May 05,1997"),gender:"Female",salary:32489.420},
		{name:"maker",dateOfBirth:new Date("August 10,1976"),gender:"Male",salary:2200.780},
		{name:"Kuna",dateOfBirth:new Date("October 27,1990"),gender:"Female",salary:1000.780},
		{name:"joker",dateOfBirth:new Date("November 23,1980"),gender:"Male",salary:2200.780},

	] 

	$scope.employee = employees;
	$scope.numberOfElement=3;

});