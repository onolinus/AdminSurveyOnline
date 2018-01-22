import angular from 'angular';
import Home from './home/home';
import Login from './login/login';
import Survey from './survey/survey';
import Responden from './responden/responden';

let componentModule = angular.module('app.components', [
  Home,
  Responden,
  Login,
  Survey,
])

.name;

export default componentModule;
