
				   var myApp = angular.module("myApp" , [])
				   .controller("myController" , function($scope, $http)
				   {
				  

						$scope.SendData = function() {
						$http.post('/view1',$scope.formData).
						success(function(data) {
						console.log("posted successfully");
						}).error(function(data) {
						console.error("error in posting");
						})
						}

						$http.get("/").success(function (response)
						{


						$scope.data = response;



						});

		   
				   });