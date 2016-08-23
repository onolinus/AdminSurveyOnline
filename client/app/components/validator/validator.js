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
      component: 'validator'
    })
    .state('validatorAdd', {
      url: '/validator/tambah',
      component: 'validatoradd',
    })
    .state('validatorDetail', {
      url: '/validator/edit/:user_id',
      component: 'validatordetail',
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

.component('validator', validatorComponent)
.component('validatordetail', validatordetailComponent)
.component('validatoradd', validatoraddComponent)

.name;

export default validatorModule;
