import angular from 'angular';
import uiRouter from 'angular-ui-router';
import validatorComponent from './validator.component';

let validatorModule = angular.module('validator', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('validator', {
      url: '/validator',
      component: 'validator'
    });
})

.component('validator', validatorComponent)

.name;

export default validatorModule;
