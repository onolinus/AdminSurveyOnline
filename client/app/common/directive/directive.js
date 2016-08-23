import angular from 'angular';
import uiRouter from 'angular-ui-router';

import Body from './body/body.component';
import MenuToggle from './menu-toggle/menu-toggle.component';
import SidebarToggle from './sidebar-toggle/sidebar-toggle.component';
import sidebarToggleChild from './sidebar-toggle/sidebar-toggle-child.component';

let directiveModule = angular.module('app.directive', [
  uiRouter
])
.directive('body', ['$timeout', '$rootScope', Body])
.directive('menuToggle', ['$timeout', MenuToggle])
.directive('sidebarToggle', ['$timeout', SidebarToggle])
.directive('sidebarToggleChild', ['$timeout', sidebarToggleChild])
.name;

export default directiveModule;
