
				   var myApp = angular.module("myApp" , [])
				   .controller("myController" , function($scope, $http)
				   {

				   	$scope.SendData = function () {
          
                    var data = $scope.search;

				            $http.post('/', data)
				            .success(function (data) {
				               console.log("posted successfully");
				            })
				            .error(function (data, status, header, config) {
				             console.log("error");
				            });
				        };
				   
				   });