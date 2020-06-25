(function () {
  'use strict';

  angular
    .module('ems.<%= name %>Module')
    .factory('<%= name %>RouteService', <%= lowerCaseName %>RouteService);

  /* @ngInject */
  function <%= lowerCaseName %>RouteService ($rootScope) {
    return {
      get<%= name %>ViewModel: get<%= name %>ViewModel
    };

    function get<%= name %>ViewModel () {
      $rootScope.title = '<%= name %>';

      return {
        world: 'World'

      };
    }
  }
})();
