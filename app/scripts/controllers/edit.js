'use strict';

angular.module('appDirectApp')
  .controller('EditCtrl', function ($scope, storage, $location) {
    
    $scope.settings = storage.getStore();	

    $scope.save = function(){
    	storage.setStore($scope.settings);
    	$location.path('/');
    }

  });
