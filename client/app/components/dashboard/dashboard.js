import angular from 'angular';
import uiRouter from 'angular-ui-router';
import dashboardComponent from './dashboard.component';
import anggaranComponent from './anggaran/anggaran.component';
import belanjaComponent from './belanja/belanja.component';
import personilComponent from './personil/personil.component';
import patenComponent from './paten/paten.component';

import chartFactory from './dashboard.chart.factory';
import chartService from './dashboard.chart.service';

let dashboardModule = angular.module('dashboard', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('dashboard', {
      url: '/dashboard',
      component: 'dashboard',
      resolve: {
        summaryStats: function(chartService){
          return chartService.summaryStats().then((response) => {
            return response;
          });
        },
        sebaranResponden: function(chartService){
          return chartService.countResponden().then((response) => {
            return response;
          });
        },
        submittedResponden: function(chartService){
          return chartService.submittedResponden().then((response) => {
            return response;
          });
        }
      },
      data: {
        permission: {
          only : ['admin','guest']
        }
      }
    })
    .state('anggaran', {
      url: '/anggaran',
      component: 'anggaran',
      parent: 'dashboard',
      // resolve: {
      //   graph2: (chartService) => {
      //     return chartService.graph2().then((response) => {
      //       return response;
      //     });
      //   }
      // },
      data: {
        permission: {
          only : ['admin','guest']
        }
      }
    })
    .state('belanja', {
      url: '/belanja',
      component: 'belanja',
      parent: 'dashboard',
      resolve: {
        graph4: (chartService) => {
          return chartService.graph4().then((response) => {
            return response;
          });
        },
        graph5: (chartService) => {
          return chartService.graph5().then((response) => {
            return response;
          });
        },
        graph6: (chartService) => {
          return chartService.graph6().then((response) => {
            return response;
          });
        },
        graph7a: (chartService) => {
          return chartService.graph7a().then((response) => {
            return response;
          });
        },
        graph7b: (chartService) => {
          return chartService.graph7b().then((response) => {
            return response;
          });
        },
        graph9: (chartService) => {
          return chartService.graph9().then((response) => {
            return response;
          });
        },
        graph11: (chartService) => {
          return chartService.graph11().then((response) => {
            return response;
          });
        },
        graph17: (chartService) => {
          return chartService.graph17().then((response) => {
            return response;
          });
        },
        graph42: (chartService) => {
          return chartService.graph42().then((response) => {
            return response;
          });
        },
        graph43: (chartService) => {
          return chartService.graph43().then((response) => {
            return response;
          });
        }
      },
      data: {
        permission: {
          only : ['admin','guest']
        }
      }
    })
    .state('personil', {
      url: '/personil',
      component: 'personil',
      parent: 'dashboard',
      resolve: {
        graph46: (chartService) => {
          return chartService.graph46().then((response) => {
            return response;
          });
        },
        graph47: (chartService) => {
          return chartService.graph47().then((response) => {
            return response;
          });
        },
        graph48: (chartService) => {
          return chartService.graph48().then((response) => {
            return response;
          });
        },
        graph50: (chartService) => {
          return chartService.graph50().then((response) => {
            return response;
          });
        },
        graph51: (chartService) => {
          return chartService.graph51().then((response) => {
            return response;
          });
        },
        graph52: (chartService) => {
          return chartService.graph52().then((response) => {
            return response;
          });
        },
        graph53: (chartService) => {
          return chartService.graph53().then((response) => {
            return response;
          });
        },
        graph63: (chartService) => {
          return chartService.graph63().then((response) => {
            return response;
          });
        },
        graph65: (chartService) => {
          return chartService.graph65().then((response) => {
            return response;
          });
        },
      },
      data: {
        permission: {
          only : ['admin','guest']
        }
      }
    })
    .state('paten', {
      url: '/paten',
      component: 'paten',
      parent: 'dashboard',
      resolve: {
        graph67: (chartService) => {
          return chartService.graph67().then((response) => {
            return response;
          });
        },
        graph68: (chartService) => {
          return chartService.graph68().then((response) => {
            return response;
          });
        },
        graph70: (chartService) => {
          return chartService.graph70().then((response) => {
            return response;
          });
        },
        graph71: (chartService) => {
          return chartService.graph71().then((response) => {
            return response;
          });
        },
        graph77: (chartService) => {
          return chartService.graph77().then((response) => {
            return response;
          });
        }
      },
      data: {
        permission: {
          only : ['admin','guest']
        }
      }
    });
})

.component('dashboard', dashboardComponent)
.component('anggaran', anggaranComponent)
.component('belanja', belanjaComponent)
.component('personil', personilComponent)
.component('paten', patenComponent)

.factory('chartFactory', [chartFactory])

.service('chartService', chartService)
.name;

export default dashboardModule;
