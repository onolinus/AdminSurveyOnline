import angular from 'angular';
import uiRouter from 'angular-ui-router';
import questions from './questions/questions';
import appFilters from '../../common/filter/filter';

import surveyComponent from './survey.component';

let surveyModule = angular.module('survey', [
  uiRouter, questions, appFilters
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('survey', {
      url: '/survey/:user_id',
      component: 'survey',
      resolve: {
        correspondentDetail : ($http, $stateParams, User, apiURL, blockUI) =>  {
          const request = {
            method: 'GET',
            url: apiURL + '/admin/correspondent/' + $stateParams.user_id,
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
        },
        userId: ($stateParams) => {
          return $stateParams.user_id;
        },
        answers: ($stateParams, questionService) => {
          return questionService.getAnswers($stateParams.user_id);
        }
      },
      data: {
        permission: {
          only : ['validator']
        }
      }
    });
})

.component('survey', surveyComponent)

.name;

export default surveyModule;
