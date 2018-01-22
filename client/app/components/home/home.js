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
      resolve: {
        respondenRegistered: ($http, appConfig, User) => {
          const req = {
            method: 'GET',
            url: appConfig.api_url + '/api/graph/respondent-registered',
            cache: true,
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
              'Authorization': 'Bearer' + ' ' + appConfig.static_token
            },
          };

          return $http(req)
            .then((response) => {
              return response.data.data[0];
            });
        }
      },
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
