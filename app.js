angular.module('myApp', [])
  .controller('MovieController', function($scope, $http){
    $scope.$watch('search', function() {
      fetch();
    });

    $scope.search = "Odessa UA";

    function fetch(){
      $http.get('http://api.apixu.com/v1/forecast.json?key=0cde55ce933147b7b48183931161811&days=4&q=' + $scope.search)
      .then(function(response){ $scope.weather = response.data; });

      }



    }
  );
