var app = angular.module("myModule",[]);
app.controller("myController",function($scope){

	var employees = [

			{name:"Ben",gender:"male",salary:5500},
			{name:"joker",gender:"female",salary:3200},
			{name:"maker",gender:"male",salary:5400},
			{name:"Doer",gender:"male",salary:3200},
			{name:"hacker",gender:"female",salary:5400},
			{name:"gta",gender:"male",salary:4300},
			{name:"guna",gender:"male",salary:3300}


	];

	$scope.employees = employees;
	$scope.employeeView = "tablePrinter.html";

});