var app=angular.module("myModule",[]);
app.controller("myController",function($scope){
	
		var usa={

			country:"USA",
			capital:"Newyork",
		 	fileSrc:"usa.png"
		}

		$scope.usaData = usa;

});