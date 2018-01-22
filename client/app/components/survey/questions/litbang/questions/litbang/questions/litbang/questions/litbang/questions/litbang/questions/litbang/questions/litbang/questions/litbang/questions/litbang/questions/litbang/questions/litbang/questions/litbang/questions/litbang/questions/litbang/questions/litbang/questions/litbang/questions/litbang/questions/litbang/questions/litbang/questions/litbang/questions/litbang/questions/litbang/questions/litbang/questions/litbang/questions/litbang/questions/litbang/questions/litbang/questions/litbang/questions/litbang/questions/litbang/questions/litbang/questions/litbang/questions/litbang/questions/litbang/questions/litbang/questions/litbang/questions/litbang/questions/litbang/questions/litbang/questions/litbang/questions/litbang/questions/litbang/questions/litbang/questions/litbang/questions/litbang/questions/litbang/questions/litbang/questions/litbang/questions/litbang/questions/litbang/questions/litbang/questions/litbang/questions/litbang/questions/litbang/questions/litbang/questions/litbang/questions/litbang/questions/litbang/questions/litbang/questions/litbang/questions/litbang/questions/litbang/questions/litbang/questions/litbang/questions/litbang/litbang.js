import angular from 'angular';
import uiRouter from 'angular-ui-router';

import uiBootstrapModal from 'angular-ui-bootstrap/src/modal';
import uiBootstrapTabs from 'angular-ui-bootstrap/src/tabs';

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
import question19Component from './question19/question19.component';
import questionDynamicComponent from './question.dynamic.component';

let homeModule = angular.module('litbang', [
  uiRouter, 'ui.bootstrap.modal', 'ui.bootstrap.module.tabs', 'uib/template/modal/window.html'
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  function getCustomBindings(no, subquestion){
    return {
      answer: ['$state', '$stateParams', 'questionFactory', ($state, $stateParams, questionFactory) =>  {
        return questionFactory.getAnswer($stateParams.survey_id, no);
      }],
      checked: ['$stateParams', 'questionFactory',($stateParams, questionFactory) => {
        return questionFactory.getChecked($stateParams.survey_id, no);
      }],
      year: ['$stateParams', ($stateParams) => $stateParams.year]
    }
  }

  $stateProvider
    .state('litbang', {
      url: '',
      template: '<div ui-view></div>',
      abstract: true
    })
    .state('question1', {
      url: '/question-1',
      parent: 'litbang',
      no:1,
      component: 'question1',
      resolve: getCustomBindings(1, false)
    })
    .state('question2', {
      url: '/question-2',
      parent: 'litbang',
      no:2,
      component: 'question2',
      resolve:getCustomBindings(2, false)
    })
    .state('question3', {
      url: '/question-3',
      parent: 'litbang',
      no:3,
      component: 'question3',
      resolve: getCustomBindings(3, false)
    })
    .state('question4', {
      url: '/question-4',
      parent: 'litbang',
      no:4,
      component: 'question4',
      resolve: getCustomBindings(4, false)
    })
    .state('question5', {
      url: '/question-5',
      parent: 'litbang',
      no:5,
      component: 'question5',
      resolve: {
        answer : ($stateParams, questionFactory) =>  {
          return questionFactory.getAnswer($stateParams.survey_id, 5);
        },
        researchFields: ($http, appConfig, User) => {
          const req = {
            method: 'GET',
            url: appConfig.api_url + '/api/researchfields',
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
          year: ($stateParams) => $stateParams.year
      }
    })
    .state('question6', {
      url: '/question-6',
      parent: 'litbang',
      no:6,
      component: 'question6',
      resolve: {
        answer : ($stateParams, questionFactory) =>  {
          return questionFactory.getAnswer($stateParams.survey_id, 6);
        },
        researchFields: ($http, appConfig, User) => {
          const req = {
            method: 'GET',
            url: appConfig.api_url + '/api/socioeconomics',
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
        year: ($stateParams) => $stateParams.year
      }
    })
    .state('question7', {
      url: '/question-7',
      parent: 'litbang',
      no:7,
      component: 'question7',
      resolve: getCustomBindings(7, false)
    })
    .state('question8', {
      url: '/question-8',
      parent: 'litbang',
      no:8,
      component: 'question8',
      resolve: {
        answer: ($stateParams, questionFactory) =>  {
          return questionFactory.getAnswer($stateParams.survey_id, 8);
        },
        checked: ($stateParams, questionFactory) => {
          return questionFactory.getChecked($stateParams.survey_id, 8);
        },
        institusi: ($http, appConfig, User) => {
          const req = {
            method: 'GET',
            url: appConfig.api_url + '/api/institusi',
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
        year: ($stateParams) => $stateParams.year
      }
    })
    .state('question9', {
      url: '/question-9',
      parent: 'litbang',
      no:9,
      component: 'question9',
      resolve: {
        answer: ($stateParams, questionFactory) =>  {
          return questionFactory.getAnswer($stateParams.survey_id, 9, true);
        },
        klasifikasi: ($http, appConfig, User) => {
          const req = {
            method: 'GET',
            url: appConfig.api_url + '/api/bidangilmu',
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
        year: ($stateParams) => $stateParams.year
      }
    })
    .state('question10', {
      url: '/question-10',
      parent: 'litbang',
      no:10,
      component: 'question10',
      resolve: {
        answer: ($stateParams, questionFactory) =>  {
          return questionFactory.getAnswer($stateParams.survey_id, 10);
        },
        checked: ($stateParams, questionFactory) => {
          return questionFactory.getChecked($stateParams.survey_id, 10);
        },
        institusi: ($http, appConfig, User) => {
          const req = {
            method: 'GET',
            url: appConfig.api_url + '/api/institusi',
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
        year: ($stateParams) => $stateParams.year
      }
    })
    .state('question11', {
      url: '/question-11',
      parent: 'litbang',
      no:11,
      component: 'question11',
      resolve: {
        answer: ($stateParams, questionFactory) =>  {
          return questionFactory.getAnswer($stateParams.survey_id, 11);
        },
        checked: ($stateParams, questionFactory) => {
          return questionFactory.getChecked($stateParams.survey_id, 11);
        },
        researchFields: ($http, appConfig, User) => {
          const req = {
            method: 'GET',
            url: appConfig.api_url + '/api/researchfields',
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
        year: ($stateParams) => $stateParams.year
      }
    })
    .state('question12', {
      url: '/question-12',
      parent: 'litbang',
      no:12,
      component: 'question12',
      resolve: {
        answer: ($stateParams, questionFactory) =>  {
          return questionFactory.getAnswer($stateParams.survey_id, 12);
        },
        checked: ($stateParams, questionFactory) => {
          return questionFactory.getChecked($stateParams.survey_id, 12);
        },
        researchFields: ($http, appConfig, User) => {
          const req = {
            method: 'GET',
            url: appConfig.api_url + '/api/researchfields',
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
        year: ($stateParams) => $stateParams.year
      }
    })
    .state('question13', {
      url: '/question-13',
      parent: 'litbang',
      no:13,
      component: 'question13',
      resolve: {
        answer: ($stateParams, questionFactory) =>  {
          return questionFactory.getAnswer($stateParams.survey_id, 13);
        },
        checked: ($stateParams, questionFactory) => {
          return questionFactory.getChecked($stateParams.survey_id, 13);
        },
        countries: ($http, appConfig, User) => {
          const req = {
            method: 'GET',
            url: appConfig.api_url + '/api/countries',
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
        year: ($stateParams) => $stateParams.year
      }
    })
    .state('question14', {
      url: '/question-14',
      parent: 'litbang',
      no:14,
      component: 'questionDynamic'
    })
    .state('question15', {
      url: '/question-15',
      parent: 'litbang',
      no:15,
      component: 'questionDynamic'
    })
    .state('question16', {
      url: '/question-16',
      parent: 'litbang',
      no:16,
      component: 'questionDynamic',
    })
    .state('question17', {
      url: '/question-17',
      parent: 'litbang',
      no:17,
      component: 'questionDynamic',
    })
    .state('question18', {
      url: '/question-18',
      parent: 'litbang',
      no: 18,
      component: 'questionDynamic',
    })
    .state('question19', {
      url: '/question-19',
      parent: 'litbang',
      no: 19,
      component: 'questionDynamic'
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
.component('question19', question19Component)
.component('questionDynamic', questionDynamicComponent)

.name;

export default homeModule;
