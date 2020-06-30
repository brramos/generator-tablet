(function () {
  'use strict';

  angular
    .module('ems.common')
    .directive('zoll<%= name %>', <%= lowerCaseName %>);

  /* @ngInject */
  function <%= lowerCaseName %> (TEMPLATES, Platform) {
    return {
      restrict: 'E',
      templateUrl: TEMPLATES.<%= lowerCaseName %>[Platform.getPlatform()],
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
