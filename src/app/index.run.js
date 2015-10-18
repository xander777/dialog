(function() {
  'use strict';

  angular
    .module('dialog')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
