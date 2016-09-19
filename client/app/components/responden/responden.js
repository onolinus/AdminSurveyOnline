import angular from 'angular';
import uiRouter from 'angular-ui-router';
import respondenComponent from './responden.component';
import toaster from 'angular-toastr';

let respondenModule = angular.module('responden', [
  uiRouter, toaster
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/home');

  $stateProvider
    .state('responden', {
      url: '/responden',
      component: 'responden',
      data: {
        permission: {
          only : ['admin']
        }
      }
    });
})

.config(['toastrConfig',
  function(toastrConfig){
    angular.extend(toastrConfig, {
      timeOut: 3000,
      preventOpenDuplicates: true
    });
  }
])

.component('responden', respondenComponent)

.name;

export default respondenModule;
