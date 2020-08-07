(function () {
  'use strict';

  angular
    .module('ems.common')
    .directive('zoll<%= pascalCaseName %>', <%= camelCaseName %>);

  /* @ngInject */
  function <%= camelCaseName %> (TEMPLATES, Platform) {
    return {
      restrict: 'E',
      templateUrl: TEMPLATES.<%= camelCaseName %>[Platform.getPlatform()],
      controller: <%= pascalCaseName %>Controller,
      controllerAs: '<%= camelCaseName %>',
      scope: {}
    };
  }

  /* @ngInject */
  function <%= pascalCaseName %>Controller () {
    var vm = this;

    vm.world = 'World';

  }
})();
