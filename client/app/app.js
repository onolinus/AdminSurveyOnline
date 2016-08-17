window.$ = require('gentelella/vendors/jquery/dist/jquery.min');
window.jQuery = require('gentelella/vendors/jquery/dist/jquery.min');
require('gentelella/vendors/bootstrap/dist/js/bootstrap.min');
require('gentelella/vendors/fastclick/lib/fastclick');
require('gentelella/vendors/nprogress/nprogress');

require('angular-block-ui/dist/angular-block-ui.min.js');
require('angular-block-ui/dist/angular-block-ui.min.css');

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import stateEvent from 'angular-ui-router/release/stateEvents.min.js';
import ngTable from 'ng-table/dist/ng-table';
import angularCookies from 'angular-cookies';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';


import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'gentelella/src/scss/custom.scss';
angular.module('app', [
    uiRouter,
    'ui.router.state.events',
    'ngTable',
    angularCookies,
    Common,
    Components,
    'blockUI'
  ])


  .config(($locationProvider) => {
    "ngInject";
    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    $locationProvider.html5Mode(true).hashPrefix('!');
  })

  .config((blockUIConfig) => {
    "ngInject";
    // Disable automatically blocking of the user interface
    blockUIConfig.autoBlock = false;

  })

  .run(($rootScope, $state, $stateParams, User) => {
    "ngInject";

    $rootScope.$on('$stateChangeStart',  (event, toState, toStateParams) => {
        if (!User.isSignedIn() && toState.name !== 'login'){
          event.preventDefault();
          $state.go('login');
        }

        if (User.isSignedIn() && toState.name == 'login') {
          event.preventDefault();
          $state.go('home');
        }
    });
  })


  .component('app', AppComponent);
