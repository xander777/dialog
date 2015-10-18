(function() {
  'use strict';

  angular
    .module('dialog')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(xDialog) {
    var vm = this;

    vm.clickToOpen = function () {
      xDialog.open({
          template: 'app/components/dialog/dialog.html',
          controller: 'DialogController',
          controllerAs: 'ctrl'
      });
    };
  }
})();
