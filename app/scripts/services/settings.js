'use strict';

angular.module('appDirectApp')
  .constant('settings', {
  	skins : ['default', 'bird', 'sun', 'honey'],
  	skin : 'default',
  	colomns : [
  		{name : 'appDirect', order : '0'},
  		{name : 'laughingsquid', order : '1'},
  		{name : 'techcrunch', order : '2'}
  	]	
  });
