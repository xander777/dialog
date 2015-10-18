(function() {
    'use strict';

    angular
        .module('dialog')
        .controller('DialogController', DialogController);

    /** @ngInject */
    function DialogController(xDialog) {
        var vm = this;

        vm.close = function(){
            xDialog.close(vm);
        }
    }
})();

