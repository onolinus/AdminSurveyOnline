import angular from 'angular';
import uiRouter from 'angular-ui-router';
import dashboardComponent from './dashboard.component';
import anggaranComponent from './anggaran/anggaran.component';
import belanjaComponent from './belanja/belanja.component';

let dashboardModule = angular.module('dashboard', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('dashboard', {
      url: '/dashboard',
      component: 'dashboard'
    })
    .state('anggaran', {
      url: '/anggaran',
      component: 'anggaran',
      parent: 'dashboard'
    })
    .state('belanja', {
      url: '/belanja',
      component: 'belanja',
      parent: 'dashboard'
    });
})

.component('dashboard', dashboardComponent)
.component('anggaran', anggaranComponent)
.component('belanja', belanjaComponent)

.name;

export default dashboardModule;
