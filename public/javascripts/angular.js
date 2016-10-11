
				   var myApp = angular.module("myApp" , [])
				   .controller("myController" , function($scope, $http)
				   {
				   	$http.get("/").success(function (response)
				   	{
				  

				    	$scope.data = response;
				    	console.log(response);
				   	
					

					});
				   	$scope.num = 1;
				   	$scope.clicked = function(){

				   		$scope.html = "You have clicked " + $scope.num + " no of times";
				   		$scope.num += 1;

				   	};





				   });