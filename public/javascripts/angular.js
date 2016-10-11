
				   var myApp = angular.module("myApp" , [])
				   .controller("myController" , function($scope, $http)
				   {
				   	$scope.search="";

				   	$scope.SendData = function () {
                    $scope.search;
        
		            var config = {
		                headers : {
		                    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
		                }
		            }

            $http.get('/', data, config)
            .success(function (data, status, headers, config) {
               console.log("posted successfully");
               console.log(data);


            })
            .error(function (data, status, header, config) {
             console.log("error");
            });
        };
				   
				   });