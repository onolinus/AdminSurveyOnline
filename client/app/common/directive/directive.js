import angular from 'angular';
import uiRouter from 'angular-ui-router';

import Body from './body/body.component';
import MenuToggle from './menu-toggle/menu-toggle.component';
import SidebarToggle from './sidebar-toggle/sidebar-toggle.component';


let directiveModule = angular.module('app.directive', [
  uiRouter
])
.directive('body', ['$timeout', '$rootScope', Body])
.directive('menuToggle', MenuToggle)
.directive('sidebarToggle', SidebarToggle)
.name;

export default directiveModule;
