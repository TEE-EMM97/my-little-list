(function () {
    'use strict';

    angular
        .module('eventsjs')
        .controller('eventsUpdateCtrl', control);

    control.$inject = [
        '$scope',
        '$state',
        'eventsSrvc'
        ];
    
    function control(
        $scope,
        $state,
        eventsSrvc
    ) {
        var vm = angular.extend(this, {
            
         });
        

      

        // TODO: Error Handling
        eventsSrvc.updateEvents().then(function(){
            $state.go('events_list');
        });    
    }
})();
