import angular from 'angular';
import Home from './home/home';
import Login from './login/login';
import Survey from './survey/survey';

let componentModule = angular.module('app.components', [
  Home,
  Login,
  Survey
])

.name;

export default componentModule;
