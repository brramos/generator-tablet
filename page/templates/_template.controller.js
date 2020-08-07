(function () {
  'use strict';

  angular
    .module('ems.<%= pascalCaseName %>Module')
    .controller('<%= pascalCaseName %>Controller', <%= camelCaseName %>Controller);

  /* @ngInject */
  function <%= camelCaseName %>Controller (<%= camelCaseName %>ViewModel) {
    var vm = this;

    vm.world = <%= camelCaseName %>ViewModel.world;
    vm.title = '<%= name %>';
    vm.showCreateChartLink = false;

  }
})();
