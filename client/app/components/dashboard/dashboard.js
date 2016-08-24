import angular from 'angular';
import uiRouter from 'angular-ui-router';
import dashboardComponent from './dashboard.component';
import anggaranComponent from './anggaran/anggaran.component';
import belanjaComponent from './belanja/belanja.component';
import personilComponent from './personil/personil.component';
import penelitiComponent from './peneliti/peneliti.component';

import chartFactory from './dashboard.chart.factory';
import chartService from './dashboard.chart.service';

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
    })
    .state('personil', {
      url: '/personil',
      component: 'personil',
      parent: 'dashboard'
    })
    .state('peneliti', {
      url: '/peneliti',
      component: 'peneliti',
      parent: 'dashboard'
    });
})

.component('dashboard', dashboardComponent)
.component('anggaran', anggaranComponent)
.component('belanja', belanjaComponent)
.component('personil', personilComponent)
.component('peneliti', penelitiComponent)

.factory('chartFactory', [chartFactory])

.service('chartService', chartService)
.name;

export default dashboardModule;
