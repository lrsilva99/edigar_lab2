(function(angular, undefined) {
'use strict';

angular.module('myappApp.constants', [])

.constant('appConfig', {userRoles:['guest','user','admin']})

;
})(angular);