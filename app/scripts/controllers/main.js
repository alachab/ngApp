'use strict';

angular.module('appDirectApp')
  .controller('MainCtrl', function ($scope, Tweets, names, storage) {

  	$scope.model = { tweets : [] };
  	$scope.state = {};

    storage.store();
    storage.getStore();
    
    var appDirectTweets = Tweets.getFakeTweetsByName(names.appDirect);
    var laughingsquidTweets = Tweets.getFakeTweetsByName(names.laughingsquid);
    var techcrunchTweets = Tweets.getFakeTweetsByName(names.techcrunch);


    appDirectTweets.then(function(tweets){ 
    	$scope.model.tweets.appDirect = tweets;
    });

    laughingsquidTweets.then(function(tweets){ 
    	$scope.model.tweets.laughingsquid = tweets;
    });

    techcrunchTweets.then(function(tweets){ 
    	$scope.model.tweets.techcrunch = tweets;
    });

});
