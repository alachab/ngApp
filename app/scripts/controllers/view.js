'use strict';

angular.module('appDirectApp')
  .controller('ViewCtrl', function ($scope, storage) {
    $scope.settings = storage.getStore();	
  });
