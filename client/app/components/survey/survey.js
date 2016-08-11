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
      component: 'survey'
    });
})

.component('survey', surveyComponent)

.name;

export default surveyModule;
