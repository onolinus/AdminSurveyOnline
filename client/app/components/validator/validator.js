import angular from 'angular';
import uiRouter from 'angular-ui-router';
import validatorComponent from './validator.component';
import validatordetailComponent from './validatordetail/validatordetail.component';
import validatoraddComponent from './validatoradd/validatoradd.component';

let validatorModule = angular.module('validator', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('validator', {
      url: '/validator',
      component: 'validator',
      data: {
        permission: {
          only : ['admin']
        }
      }
    })
    .state('validatorAdd', {
      url: '/validator/tambah',
      component: 'validatoradd',
      data: {
        permission: {
          only : ['admin']
        }
      }
    })
    .state('validatorDetail', {
      url: '/validator/edit/:user_id',
      component: 'validatordetail',
      resolve: {
        userDetail : ($http, $stateParams, User, appConfig, blockUI) =>  {
          const request = {
            method: 'GET',
            url: appConfig.api_url + '/user/' + $stateParams.user_id,
            cache: true,
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
      },
      data: {
        permission: {
          only : ['admin']
        }
      }
    });
})

.component('validator', validatorComponent)
.component('validatordetail', validatordetailComponent)
.component('validatoradd', validatoraddComponent)

.name;

export default validatorModule;
