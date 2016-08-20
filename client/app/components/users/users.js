import angular from 'angular';
import uiRouter from 'angular-ui-router';
import usersComponent from './users.component';
import usersDetailComponent from './detail/detail.component';

import toaster from 'angular-toastr';

let usersModule = angular.module('users', [
  uiRouter,
  toaster
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('users', {
      url: '/users',
      component: 'users'
    })
    .state('userdetail', {
      url: '/users/:user_id',
      component: 'usersDetail',
      resolve: {
        userDetail : ($http, $stateParams, User, apiURL, blockUI) =>  {
          const request = {
            method: 'GET',
            url: apiURL + '/user/' + $stateParams.user_id,
            headers: {
              'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8',
              'Authorization': 'Bearer' + ' ' + User.getAuth().access_token
            }
          };

          blockUI.start();
          return $http(request).then((result) => {
            return result.data.data;
          })
          .finally(() => blockUI.stop());
        }
      }
    });
})

.component('users', usersComponent)
.component('usersDetail', usersDetailComponent)

.name;

export default usersModule;
