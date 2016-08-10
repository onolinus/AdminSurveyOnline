import angular from 'angular';
import Navbar from './navbar/navbar';
import Menu from './menu/menu';
import Footer from './footer/footer';

import User from './user/user';

import AppDirective from './directive/directive';


let commonModule = angular.module('app.common', [
  Navbar,
  User,
  Menu,
  Footer,
  AppDirective
])

.name;

export default commonModule;
