import angular from 'angular';
import Home from './home/home';
import Login from './login/login';

let componentModule = angular.module('app.components', [
  Home,
  Login
])

.name;

export default componentModule;
