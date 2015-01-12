'use strict';

angular.module('appDirectApp')
  .factory('storage', function (settings, localStorageService) {
    
    var key = 'settings';

    function store(){
      if( localStorageService.isSupported ){
          if( !getStore() ){
            localStorageService.set(key, settings);
            console.log('store called');
          }
      }else{
        //FallBack to Cookie
      }
    }

    function setStore(val){
      return localStorageService.set(key,val);
    }    

    function getStore(){
      return localStorageService.get(key);
    }

    function removeStore(){
      return localStorageService.clearAll();
    }

    // Public API here
    return {
      store : store,
      setStore : setStore,
      getStore : getStore,
      removeStore : removeStore
    };
  });
