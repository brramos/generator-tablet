(function () {
    'use strict';
  
    angular
      .module('ems.common')
      .directive('zoll<%= name %>', <%= lowerCaseName %>);
  
    /* @ngInject */
    function <%= lowerCaseName %> (TEMPLATES) {
      return {
        restrict: 'E',
        templateUrl: TEMPLATES.<%= lowerCaseName %>,
        controller: <%= name %>Controller,
        controllerAs: '<%= lowerCaseName %>',
        scope: {}
      };
    }
  
    /* @ngInject */
    function <%= name %>Controller () {
      var vm = this;
  
      vm.world = 'World';
  
    }
  })();
  