(function () {
  'use strict';

  angular
    .module('ems.<%= pascalCaseName %>Module')
    .factory('<%= pascalCaseName %>RouteService', <%= camelCaseName %>RouteService);

  /* @ngInject */
  function <%= camelCaseName %>RouteService ($rootScope) {
    return {
      get<%= pascalCaseName %>ViewModel: get<%= pascalCaseName %>ViewModel
    };

    function get<%= pascalCaseName %>ViewModel () {
      $rootScope.title = '<%= name %>';

      return {
        world: 'World'

      };
    }
  }
})();
