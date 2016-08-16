import angular from 'angular';
import uiRouter from 'angular-ui-router';
import questions from './questions/questions';

import surveyComponent from './survey.component';

let surveyModule = angular.module('survey', [
  uiRouter, questions
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('survey', {
      url: '/survey/:user_id',
      component: 'survey',
      resolve: {
        correspondentDetail : ($http, $stateParams, User, apiURL) =>  {
          const request = {
            method: 'GET',
            url: apiURL + '/admin/correspondent/' + $stateParams.user_id,
            headers: {
              'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8',
              'Authorization': 'Bearer' + ' ' + User.getAuth().access_token
            }
          };

          return $http(request).then((result) => {
            console.log(result.data.data);
            return result.data.data;
          });
        }
      }
    });
})

.component('survey', surveyComponent)

.name;

export default surveyModule;
