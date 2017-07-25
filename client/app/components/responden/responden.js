import angular from 'angular';
import uiRouter from 'angular-ui-router';
import respondenComponent from './responden.component';
import toaster from 'angular-toastr';

let respondenModule = angular.module('responden', [
  uiRouter, toaster
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/responden.list');

  $stateProvider
    .state('responden', {
      url: '',
      template: '<div ui-view></div>',
      abstract: true
    })
    .state('responden.list', {
      url: '/responden',
      component: 'responden',
      resolve: {
        litbang: ($http, appConfig, User) => {
          const req = {
            method: 'GET',
            url: appConfig.api_url + '/api/lembaga/litbang',
            cache: true,
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
              'Authorization': 'Bearer' + ' ' + User.getAuth().access_token
            },
          };

          return $http(req)
            .then((response) => {
              return response.data.data;
            });
        },
        industri: ($http, appConfig, User) => {
          const req = {
            method: 'GET',
            url: appConfig.api_url + '/api/lembaga/industri',
            cache: true,
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
              'Authorization': 'Bearer' + ' ' + User.getAuth().access_token
            },
          };

          return $http(req)
            .then((response) => {
              return response.data.data;
            });
        },
      },
      data: {
        permission: {
          only : ['admin', 'validator', 'respondent']
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
