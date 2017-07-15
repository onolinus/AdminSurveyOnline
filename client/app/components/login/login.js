import angular from 'angular';
import uiRouter from 'angular-ui-router';
import loginComponent from './login.component';

import toaster from 'angular-toastr';

require('angular-animate');


import User from '../../common/user/user';

import 'angular-toastr/dist/angular-toastr.min.css';

let loginModule = angular.module('login', [
  uiRouter,
  User,
  toaster,
  'ngAnimate'
])


.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/masuk');

  $stateProvider
    .state('login', {
      url: '/masuk',
      component: 'login'
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

.component('login', loginComponent)

.name;

export default loginModule;
