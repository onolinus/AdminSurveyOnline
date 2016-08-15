import angular from 'angular';
import UserFactory from './user.factory';

import appConfig from '../../../../app.config.js';

let userModule = angular.module('user', [])

.constant('apiURL', appConfig.API)

.config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }
])

.factory('User', ['$http', '$q', '$cookies', 'apiURL', UserFactory])

.name;

export default userModule;
