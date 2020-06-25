(function () {
  'use strict';

  angular
    .module('ems.<%= name %>Module')
    .factory('<%= name %>Service', <%= lowerCaseName %>Service);

  /* @ngInject */
  function <%= lowerCaseName %>Service ($rootScope) {
    return {
      foo: foo
    };

    function foo () {

    }
  }
})();
