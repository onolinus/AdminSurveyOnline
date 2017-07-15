import angular from 'angular';
import uiRouter from 'angular-ui-router';
import homeComponent from './home.component';

let homeModule = angular.module('home', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/home');

  $stateProvider
    .state('home', {
      url: '',
      template: '<div ui-view></div>',
      abstract: true
    })
    .state('home.dashboard', {
      url: '/',
      component: 'home',
      data: {
        permission: {
          only : ['validator']
        }
      }
    });
})

.component('home', homeComponent)

.name;

export default homeModule;
