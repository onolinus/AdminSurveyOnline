import angular from 'angular';
import Home from './home/home';
import Login from './login/login';
import Survey from './survey/survey';
import Dashboard from './dashboard/dashboard';
import Validator from './validator/validator';
import Responden from './responden/responden';
import Users from './users/users';

let componentModule = angular.module('app.components', [
  Home,
  Responden,
  Login,
  Survey
])

.name;

export default componentModule;
