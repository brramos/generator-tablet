(function () {
  'use strict';

  angular
    .module('ems.<%= pascalCaseName %>Module')
    .factory('<%= pascalCaseName %>Service', <%= camelCaseName %>Service);

  /* @ngInject */
  function <%= camelCaseName %>Service ($rootScope) {
    return {
      foo: foo
    };

    function foo () {

    }
  }
})();
