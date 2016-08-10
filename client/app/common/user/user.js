import angular from 'angular';
import UserFactory from './user.factory';

let userModule = angular.module('user', [])

.factory('User', ['$http', '$q', '$cookies', UserFactory])

.name;

export default userModule;
