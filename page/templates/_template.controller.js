(function () {
    'use strict';
  
    angular
      .module('ems.<%= name %>Module')
      .controller('<%= name %>Controller', <%= lowerCaseName %>Controller);
  
    /* @ngInject */
    function <%= lowerCaseName %>Controller (<%= lowerCaseName %>ViewModel) {
      var vm = this;
  

    }
  })();
  