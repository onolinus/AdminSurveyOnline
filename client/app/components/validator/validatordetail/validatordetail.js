import angular from 'angular';
import uiRouter from 'angular-ui-router';
import validatordetailComponent from './validatordetail.component';

let validatordetailModule = angular.module('validatordetail', [
  uiRouter
])

.component('validatordetail', validatordetailComponent)

.name;

export default validatordetailModule;
