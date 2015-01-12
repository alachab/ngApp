'use strict';

angular.module('appDirectApp')
  .service('Tweets', function Tweets($q, $http) {

    //I could not get Twitter Api working :( and i do not have match time to debug ;)   

    var fake = {
      appDirect : [
        {'id' : 1,'tweet' : 'yes it is me'},
        {'id' : 2,'tweet' : 'a tweet ;)'},
        {'id' : 3,'tweet' : 'cool raoul'}
      ],
      laughingsquid : [
        {'id' : 1,'tweet' : 'hahah ahaha'},
        {'id' : 2,'tweet' : 'toto'}
      ],
      techcrunch : [
        {'id' : 1,'tweet' : 'angualr is cool'},
        {'id' : 2,'tweet' : ';)'}
      ]
    }

  	var URL = 'Api/proxy.php?url='+encodeURIComponent('statuses/user_timeline.json?screen_name=MikeRogers0&count=2'); 
    
    function getTweetsByName(name){

    	var deferred = $q.defer();

    	$http.get(URL, function(tweets){
        deferred.resolve(tweets);
      },function(reason){
        deferred.reject(reason);
        console.log('Error : ', reason);
      });

	    return deferred.promise;

    }

    function getFakeTweetsByName(name){

      var deferred = $q.defer();

      if( name && fake[ name ] ){
        deferred.resolve(fake[ name ]);
      }else{
        deferred.reject('Sorry :(');
      }

      return deferred.promise;

    }



    return {
      getTweetsByName : getTweetsByName,
      getFakeTweetsByName : getFakeTweetsByName
    }

  });
