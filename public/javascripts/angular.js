
				   var myApp = angular.module("myApp" , [])
				   .controller("myController" , function($scope, $http)
				   {

				   	$scope.SendData = function () {
          
                    var data = $scope.search;
        
		            var config = {
		                headers : {
		                    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
		                }
		            }

            $http.post('/', $scope.search, config)
            .success(function ($scope.search, status, headers, config) {
               console.log("posted successfully");
               console.log($scope.search);

            })
            .error(function (data, status, header, config) {
             console.log("error");
            });
        };
				   
				   });