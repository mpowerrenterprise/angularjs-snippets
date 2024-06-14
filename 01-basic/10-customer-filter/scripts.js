var app = angular.module("myModule",[]);
app.controller("myController",function($scope){

	var employees = [

			{name:"Ben",gender:1,salary:5500},
			{name:"joker",gender:2,salary:3200},
			{name:"maker",gender:2,salary:5400},
			{name:"Doer",gender:1,salary:3200},
			{name:"hacker",gender:2,salary:5400},
			{name:"gta",gender:2,salary:4300},
			{name:"guna",gender:1,salary:3300}


	];

	$scope.employees = employees;

});