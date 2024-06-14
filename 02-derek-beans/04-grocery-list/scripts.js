var application1 = angular.module("app1",[]);

application1.controller("ctrl1",function($scope){


	var groceryList=[

		{item:"Tomoto",Price:250},
		{item:"Banana",Price:100},
		{item:"Apple",Price:80},
		{item:"Orange",Price:50},
		{item:"Biscuit",Price:250},
		{item:"Pizza",Price:1000},
		{item:"Soda",Price:50},
		{item:"Milk",Price:50}

	]


	$scope.groceryItems = groceryList;
	

});