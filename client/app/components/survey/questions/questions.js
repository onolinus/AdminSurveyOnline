import angular from 'angular';
import uiRouter from 'angular-ui-router';

import questionService from './question.service';
import questionFactory from './question.factory';
import modalRejectController from './modalReject.controller';

import litbang  from './litbang/litbang';
import industri  from './industri/industri';


let questionsModule = angular.module('questions', [
  uiRouter, litbang, industri
])

.filter('institusi', function() {
  return function(input, options) {
    let name = '';
    angular.forEach(options, (item) => {

      if (item.id == input) {
        name = item.label
      }
    });
    return name;
  }
})

.filter('country', function() {
  return function(input, options) {
    console.log(input, options)
    let name = '';
    angular.forEach(options, (item) => {
      if (item.id == input) {
        name = item.nama
      }
    });

    return name;
  }
})

.service('questionService', questionService)

.factory('questionFactory', [questionFactory])

.controller('modalReject', modalRejectController)

.name;

export default questionsModule;
