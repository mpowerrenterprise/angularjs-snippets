var app = angular
			.module("myModule",[])
			.controller("myController",function($scope){

				var employee={

						firstname:"Guna",
						lastname:"Rakulan",
						gender:"male"

				}

				$scope.emp=employee;


			});



/*

	This is called chining method.
	We have joined the module and the controller at once.


*/