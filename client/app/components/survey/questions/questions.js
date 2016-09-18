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
import question10Component from './question10/question10.component';
import question11Component from './question11/question11.component';
import question12Component from './question12/question12.component';
import question13Component from './question13/question13.component';
import question14Component from './question14/question14.component';
import question15Component from './question15/question15.component';
import question16Component from './question16/question16.component';
import question17Component from './question17/question17.component';
import question18Component from './question18/question18.component';

import questionService from './question.service';

import questionFactory from './question.factory';

import modalRejectController from './modalReject.controller';

import uiBootstrapModal from 'angular-ui-bootstrap/src/modal';
import uiBootstrapTabs from 'angular-ui-bootstrap/src/tabs';

let questionsModule = angular.module('questions', [
  uiRouter, 'ui.bootstrap.modal', 'ui.bootstrap.module.tabs', 'uib/template/modal/window.html'
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('question1', {
      url: '/question-1',
      parent: 'survey',
      no:1,
      component: 'question1',
      resolve: {
        answer : ($stateParams, questionFactory) =>  {
          return questionFactory.getAnswer($stateParams.user_id, 1);
        }
      }
    })
    .state('question2', {
      url: '/question-2',
      parent: 'survey',
      no:2,
      component: 'question2',
      resolve: {
        answer : ($stateParams, questionFactory) =>  {
          return questionFactory.getAnswer($stateParams.user_id, 2);
        }
      }
    })
    .state('question3', {
      url: '/question-3',
      parent: 'survey',
      no:3,
      component: 'question3',
      resolve: {
        answer : ($stateParams, questionFactory) =>  {
          return questionFactory.getAnswer($stateParams.user_id, 3);
        }
      }
    })
    .state('question4', {
      url: '/question-4',
      parent: 'survey',
      no:4,
      component: 'question4',
      resolve: {
        answer : ($stateParams, questionFactory) =>  {
          return questionFactory.getAnswer($stateParams.user_id, 4);
        }
      }
    })
    .state('question5', {
      url: '/question-5',
      parent: 'survey',
      no:5,
      component: 'question5',
      resolve: {
        answer : ($stateParams, questionFactory) =>  {
          return questionFactory.getAnswer($stateParams.user_id, 5);
        },
        researchFields: ($http, apiURL, User) => {
          const req = {
            method: 'GET',
            url: apiURL + '/researchfields',
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
        }
      }
    })
    .state('question6', {
      url: '/question-6',
      parent: 'survey',
      no:6,
      component: 'question6',
      resolve: {
        answer : ($stateParams, questionFactory) =>  {
          return questionFactory.getAnswer($stateParams.user_id, 6);
        },
        researchFields: ($http, apiURL, User) => {
          const req = {
            method: 'GET',
            url: apiURL + '/socioeconomics',
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
        }
      }
    })
    .state('question7', {
      url: '/question-7',
      parent: 'survey',
      no:7,
      component: 'question7',
      resolve: {
        answer: ($stateParams, questionFactory) =>  {
          return questionFactory.getAnswer($stateParams.user_id, 7);
        }
      }
    })
    .state('question8', {
      url: '/question-8',
      parent: 'survey',
      no:8,
      component: 'question8',
      resolve: {
        answer: ($stateParams, questionFactory) =>  {
          return questionFactory.getAnswer($stateParams.user_id, 8);
        },
        checked: ($stateParams, questionFactory) => {
          return questionFactory.getChecked($stateParams.user_id, 8);
        }
      }
    })
    .state('question9', {
      url: '/question-9',
      parent: 'survey',
      no:9,
      component: 'question9',
      resolve: {
        answer: ($stateParams, questionFactory) =>  {
          return questionFactory.getAnswer($stateParams.user_id, 9, true);
        },
        klasifikasi: ($http, apiURL, User) => {
          const req = {
            method: 'GET',
            url: apiURL + '/bidangilmu',
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

        }
      }
    })
    .state('question10', {
      url: '/question-10',
      parent: 'survey',
      no:10,
      component: 'question10',
      resolve: {
        answer: ($stateParams, questionFactory) =>  {
          return questionFactory.getAnswer($stateParams.user_id, 10);
        },
        checked: ($stateParams, questionFactory) => {
          return questionFactory.getChecked($stateParams.user_id, 10);
        }
      }
    })
    .state('question11', {
      url: '/question-11',
      parent: 'survey',
      no:11,
      component: 'question11',
      resolve: {
        answer: ($stateParams, questionFactory) =>  {
          return questionFactory.getAnswer($stateParams.user_id, 11);
        },
        checked: ($stateParams, questionFactory) => {
          return questionFactory.getChecked($stateParams.user_id, 11);
        },
        researchFields: ($http, apiURL, User) => {
          const req = {
            method: 'GET',
            url: apiURL + '/researchfields',
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
        }
      }
    })
    .state('question12', {
      url: '/question-12',
      parent: 'survey',
      no:12,
      component: 'question12',
      resolve: {
        answer: ($stateParams, questionFactory) =>  {
          return questionFactory.getAnswer($stateParams.user_id, 12);
        },
        checked: ($stateParams, questionFactory) => {
          return questionFactory.getChecked($stateParams.user_id, 12);
        },
        researchFields: ($http, apiURL, User) => {
          const req = {
            method: 'GET',
            url: apiURL + '/researchfields',
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
        }
      }
    })
    .state('question13', {
      url: '/question-13',
      parent: 'survey',
      no:13,
      component: 'question13',
      resolve: {
        answer: ($stateParams, questionFactory) =>  {
          return questionFactory.getAnswer($stateParams.user_id, 13);
        },
        checked: ($stateParams, questionFactory) => {
          return questionFactory.getChecked($stateParams.user_id, 13);
        }
      }
    })
    .state('question14', {
      url: '/question-14',
      parent: 'survey',
      no:14,
      component: 'question14',
      resolve: {
        answer: ($stateParams, questionFactory) =>  {
          return questionFactory.getAnswer($stateParams.user_id, 14);
        },
        checked: ($stateParams, questionFactory) => {
          return questionFactory.getChecked($stateParams.user_id, 14);
        }
      }
    })
    .state('question15', {
      url: '/question-15',
      parent: 'survey',
      no:15,
      component: 'question15',
      resolve: {
        answer: ($stateParams, questionFactory) =>  {
          return questionFactory.getAnswer($stateParams.user_id, 15, true);
        },
        checked: ($stateParams, questionFactory) => {
          return questionFactory.getChecked($stateParams.user_id, 15, true);
        }
      }
    })
    .state('question16', {
      url: '/question-16',
      parent: 'survey',
      no:16,
      component: 'question16',
      resolve: {
        answer: ($stateParams, questionFactory) =>  {
          return questionFactory.getAnswer($stateParams.user_id, 16, true);
        },
        checked: ($stateParams, questionFactory) => {
          return questionFactory.getChecked($stateParams.user_id, 16, true);
        }
      }
    })
    .state('question17', {
      url: '/question-17',
      parent: 'survey',
      no:17,
      component: 'question17',
      resolve: {
        answer: ($stateParams, questionFactory) =>  {
          return questionFactory.getAnswer($stateParams.user_id, 17, true);
        },
        checked: ($stateParams, questionFactory) => {
          return questionFactory.getChecked($stateParams.user_id, 17, true);
        }
      }
    })
    .state('question18', {
      url: '/question-18',
      parent: 'survey',
      no: 18,
      component: 'question18',
      resolve: {
        answer: ($stateParams, questionFactory) =>  {
          return questionFactory.getAnswer($stateParams.user_id, 18);
        }
      }
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
.component('question10', question10Component)
.component('question11', question11Component)
.component('question12', question12Component)
.component('question13', question13Component)
.component('question14', question14Component)
.component('question15', question15Component)
.component('question16', question16Component)
.component('question17', question17Component)
.component('question18', question18Component)


.service('questionService', questionService)

.factory('questionFactory', [questionFactory])

.controller('modalReject', modalRejectController)

.name;

export default questionsModule;
