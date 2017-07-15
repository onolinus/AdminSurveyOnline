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

  $stateProvider
    .state('survey', {
      url: '/survey/:year/:survey_id',
      component: 'survey',
      resolve: {
        answers: ($stateParams, questionService, blockUI) => {
          blockUI.start();
          return questionService.getAnswers($stateParams.survey_id)
            .then(function(res){
              return res;
            })
            .finally(() => {
              blockUI.stop();
            });
        },
        survey: ($http, appConfig, User, $stateParams) => {
          const req = {
            method: 'GET',
            url: appConfig.api_url + '/api/validator/survey/' + $stateParams.survey_id + '?includes=respondent',
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
        surveyId: ($stateParams) => {
          return $stateParams.survey_id
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
