import angular from 'angular';
import uiRouter from 'angular-ui-router';
import profileComponent from './profile.component';

let profileModule = angular.module('profile', [
  uiRouter
])

.component('profile', profileComponent)

.name;

export default profileModule;
