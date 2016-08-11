import angular from 'angular';
import uiRouter from 'angular-ui-router';

import question1Component from './question1/question1.component';
import question2Component from './question2/question2.component';
import question3Component from './question3/question3.component';
import question4Component from './question4/question4.component';
import question5Component from './question5/question5.component';
import question6Component from './question6/question6.component';
import question7Component from './question7/question7.component';
import question8Component from './question8/question8.component';
import question9Component from './question9/question9.component';

let questionsModule = angular.module('questions', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('question1', {
      url: '/question-1',
      parent: 'survey',
      component: 'question1'
    })
    .state('question2', {
      url: '/question-2',
      parent: 'survey',
      component: 'question2'
    })
    .state('question3', {
      url: '/question-3',
      parent: 'survey',
      component: 'question3'
    })
    .state('question4', {
      url: '/question-4',
      parent: 'survey',
      component: 'question4'
    })
    .state('question5', {
      url: '/question-5',
      parent: 'survey',
      component: 'question5'
    })
    .state('question6', {
      url: '/question-6',
      parent: 'survey',
      component: 'question6'
    })
    .state('question7', {
      url: '/question-7',
      parent: 'survey',
      component: 'question7'
    })
    .state('question8', {
      url: '/question-8',
      parent: 'survey',
      component: 'question8'
    })
    .state('question9', {
      url: '/question-9',
      parent: 'survey',
      component: 'question9'
    });
})
.component('question1', question1Component)
.component('question2', question2Component)
.component('question3', question3Component)
.component('question4', question4Component)
.component('question5', question5Component)
.component('question6', question6Component)
.component('question7', question7Component)
.component('question8', question8Component)
.component('question9', question9Component)
.name;

export default questionsModule;
