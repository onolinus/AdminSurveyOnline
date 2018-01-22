import angular from 'angular';
import uiRouter from 'angular-ui-router';

import uiBootstrapModal from 'angular-ui-bootstrap/src/modal';
import uiBootstrapTabs from 'angular-ui-bootstrap/src/tabs';

import question1Component from './question1/question1.component';
import question2Component from './question2/question2.component';
import question3Component from './question3/question3.component';
import question4Component from './question4/question4.component';
import question5Component from './question5/question5.component';
import question6Component from './question6/question6.component';
import question7Component from './question7/question7.component';
import question8Component from './question8/question8.component';
import question9Component from './question9/question9.component';
import question10Component from './question10/question10.component';
import question11Component from './question11/question11.component';
import question12Component from './question12/question12.component';
import question13Component from './question13/question13.component';
import question14Component from './question14/question14.component';


let homeModule = angular.module('industri', [
  uiRouter, 'ui.bootstrap.modal', 'ui.bootstrap.module.tabs', 'uib/template/modal/window.html'
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  function getCustomBindings(no, subquestion){
    return {
      answer: ['$state', '$stateParams', 'questionFactory', ($state, $stateParams, questionFactory) =>  {
        return questionFactory.getAnswer($stateParams.survey_id, no);
      }],
      checked: ['$stateParams', 'questionFactory',($stateParams, questionFactory) => {
        return questionFactory.getChecked($stateParams.survey_id, no);
      }],
      year: ['$stateParams', ($stateParams) => $stateParams.year]
    }
  }

  $stateProvider
    .state('industri', {
      url: '/industri',
      template: '<div ui-view></div>',
      abstract: true,
      parent: 'survey',
    })
    .state('industri.question1', {
      url: '/question-1',
      parent: 'industri',
      no:1,
      component: 'industri.question1',
      resolve: getCustomBindings(1, false)
    })
    .state('industri.question2', {
      url: '/question-2',
      parent: 'industri',
      no:2,
      component: 'industri.question2',
      resolve:getCustomBindings(2, false)
    })
    .state('industri.question3', {
      url: '/question-3',
      parent: 'industri',
      no:3,
      component: 'industri.question3',
      resolve: {
        answer: ['$state', '$stateParams', 'questionFactory', ($state, $stateParams, questionFactory) =>  {
          return questionFactory.getAnswer($stateParams.survey_id, 3);
        }],
        institusiNasional: ($http, appConfig, User) => {
          const req = {
            method: 'GET',
            url: appConfig.api_url + '/api/industri/institusi/nasional',
            cache: true,
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
              'Authorization': 'Bearer' + ' ' + User.getAuth().access_token
            },
          };

          return $http(req)
            .then((response) => {
              return response.data.data.map((institusi) => {
                switch (institusi.name) {
                  case 'Perguruan Tinggi':
                    institusi.kode = 'institusi_nasional_perguruan_tinggi'
                    break;
                  case 'Lembaga Litbang Pemerintah Kementerian':
                    institusi.kode = 'institusi_nasional_litbang_pemerintah_kementrian'
                    break;
                  case 'Lembaga Litbang Pemerintah Non Kementerian':
                    institusi.kode = 'institusi_nasional_litbang_pemerintah_nonkementrian'
                    break;
                  case 'Badan Litbang Daerah':
                    institusi.kode = 'institusi_nasional_litbang_daerah'
                    break;
                  case 'Industri Lainnya':
                    institusi.kode = 'institusi_nasional_lainnya'
                    break;
                }
                return institusi;
              });
            });
        },
        institusiInternasional: ($http, appConfig, User) => {
          const req = {
            method: 'GET',
            url: appConfig.api_url + '/api/industri/institusi/internasional',
            cache: true,
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
              'Authorization': 'Bearer' + ' ' + User.getAuth().access_token
            },
          };

          return $http(req)
            .then((response) => {
              return response.data.data.map((institusi) => {
                switch (institusi.name) {
                  case 'Perusahaan Multinasional':
                    institusi.kode = 'institusi_internasional_multinasional'
                    break;
                  case 'Perguruan Tinggi':
                    institusi.kode = 'institusi_internasional_perguruan_tinggi'
                    break;
                  case 'Lembaga Internasional':
                    institusi.kode = 'institusi_internasional_lembaga'
                    break;
                  case 'Lembaga Litbang Asing Milik Pemerintah':
                    institusi.kode = 'institusi_internasional_litbang_asing_pemerintah'
                    break;
                  case 'Lembaga Litbang Asing Milik Swasta':
                    institusi.kode = 'institusi_internasional_litbang_asing_swasta'
                    break;
                }
                return institusi;
              });
            });
        },
        checked: ['$stateParams', 'questionFactory',($stateParams, questionFactory) => {
          return questionFactory.getChecked($stateParams.survey_id, 3);
        }],
        year: ['$stateParams', ($stateParams) => $stateParams.year]
      }
    })
    .state('industri.question4', {
      url: '/question-4',
      parent: 'industri',
      no:4,
      component: 'industri.question4',
      resolve: {
        answer: ['$state', '$stateParams', 'questionFactory', ($state, $stateParams, questionFactory) =>  {
          return questionFactory.getAnswer($stateParams.survey_id, 4);
        }],
        unit: ($http, appConfig, User) => {
          const req = {
            method: 'GET',
            url: appConfig.api_url + '/api/industri/unit-kerja',
            cache: true,
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
              'Authorization': 'Bearer' + ' ' + User.getAuth().access_token
            },
          };

          return $http(req)
            .then((response) => {
              return response.data.data.map((unit) => {
                if (unit.name.toLowerCase().includes('litbang')) {
                  unit.kode = 'litbang'
                }
                if (unit.name.toLowerCase().includes('maintenance')) {
                  unit.kode = 'maintenance'
                }
                if (unit.name.toLowerCase().includes('pic')) {
                  unit.kode = 'pic'
                }
                if (unit.name.toLowerCase().includes('produksi')) {
                  unit.kode = 'produksi'
                }
                if (unit.name.toLowerCase().includes('qc')) {
                  unit.kode = 'qc'
                }
                if (unit.name.toLowerCase().includes('engineering')) {
                  unit.kode = 'engineering'
                }
                return unit;
              });
            });
        },
        checked: ['$stateParams', 'questionFactory',($stateParams, questionFactory) => {
          return questionFactory.getChecked($stateParams.survey_id, 4);
        }],
        year: ['$stateParams', ($stateParams) => $stateParams.year]
      }
    })
    .state('industri.question5', {
      url: '/question-5',
      parent: 'industri',
      no:5,
      component: 'industri.question5',
      resolve: getCustomBindings(5, false)
    })
    .state('industri.question6', {
      url: '/question-6',
      parent: 'industri',
      no:6,
      component: 'industri.question6',
      resolve: getCustomBindings(6, false)
    })
    .state('industri.question7', {
      url: '/question-7',
      parent: 'industri',
      no:7,
      component: 'industri.question7',
      resolve: getCustomBindings(7, false)
    })
    .state('industri.question8', {
      url: '/question-8',
      parent: 'industri',
      no:8,
      component: 'industri.question8',
      resolve: {
        answer: ['$state', '$stateParams', 'questionFactory', ($state, $stateParams, questionFactory) =>  {
          return questionFactory.getAnswer($stateParams.survey_id, 8);
        }],
        output: ($http, appConfig, User) => {
          const req = {
            method: 'GET',
            url: appConfig.api_url + '/api/industri/output-litbang',
            cache: true,
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
              'Authorization': 'Bearer' + ' ' + User.getAuth().access_token
            },
          };

          return $http(req)
            .then((response) => {
              return response.data.data.map((output) => {
                switch (output.name) {
                  case 'Jurnal ilmiah internasional':
                    output.kode = 'jurnal_ilmiah_internasional';
                    break;
                  case 'Jurnal ilmiah nasional':
                    output.kode = 'jurnal_ilmiah_nasional';
                    break;
                  case 'Prosiding internasional':
                    output.kode = 'prodising_internasional';
                    break;
                  case 'Prosiding nasional':
                    output.kode = 'prodising_nasional';
                    break;
                  case 'Prototipe':
                    output.kode = 'prototipe';
                    break;
                  case 'Sistem operasi, algoritma, dan bahasa pemrograman baru':
                    output.kode = 'programing_language';
                    break;
                  case 'Spesifikasi produk, desain industri':
                    output.kode = 'spec_desain_produk';
                    break;
                  case 'Pilot plant yang terkait dengan uji hipotesis':
                    output.kode = 'pilot_plan'
                    break;
                  case 'Penyelesaian masalah dari kegiatan litbang':
                    output.kode = 'penyelesaian_masalah_litbang'
                    break;
                  case 'Hasil Uji Klinis':
                    output.kode = 'uji_klinis';
                    break;
                }
                return output;
              });
            });
        },
        checked: ['$stateParams', 'questionFactory',($stateParams, questionFactory) => {
          return questionFactory.getChecked($stateParams.survey_id, 8);
        }],
        year: ['$stateParams', ($stateParams) => $stateParams.year]
      }
    })
    .state('industri.question9', {
      url: '/question-9',
      parent: 'industri',
      no:9,
      component: 'industri.question9',
      resolve: {
        answer: ['$state', '$stateParams', 'questionFactory', ($state, $stateParams, questionFactory) =>  {
          return questionFactory.getAnswer($stateParams.survey_id, 9);
        }],
        institusiNasional: ($http, appConfig, User) => {
          const req = {
            method: 'GET',
            url: appConfig.api_url + '/api/industri/institusi/nasional',
            cache: true,
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
              'Authorization': 'Bearer' + ' ' + User.getAuth().access_token
            },
          };

          return $http(req)
            .then((response) => {
              return response.data.data.map((institusi) => {
                switch (institusi.name) {
                  case 'Perguruan Tinggi':
                    institusi.kode = 'institusi_nasional_perguruan_tinggi'
                    break;
                  case 'Lembaga Litbang Pemerintah Kementerian':
                    institusi.kode = 'institusi_nasional_litbang_pemerintah_kementrian'
                    break;
                  case 'Lembaga Litbang Pemerintah Non Kementerian':
                    institusi.kode = 'institusi_nasional_litbang_pemerintah_nonkementrian'
                    break;
                  case 'Badan Litbang Daerah':
                    institusi.kode = 'institusi_nasional_litbang_daerah'
                    break;
                  case 'Industri Lainnya':
                    institusi.kode = 'institusi_nasional_lainnya'
                    break;
                }
                return institusi;
              });
            });
        },
        institusiInternasional: ($http, appConfig, User) => {
          const req = {
            method: 'GET',
            url: appConfig.api_url + '/api/industri/institusi/internasional',
            cache: true,
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
              'Authorization': 'Bearer' + ' ' + User.getAuth().access_token
            },
          };

          return $http(req)
            .then((response) => {
              return response.data.data.map((institusi) => {
                switch (institusi.name) {
                  case 'Perusahaan Multinasional':
                    institusi.kode = 'institusi_internasional_multinasional'
                    break;
                  case 'Perguruan Tinggi':
                    institusi.kode = 'institusi_internasional_perguruan_tinggi'
                    break;
                  case 'Lembaga Internasional':
                    institusi.kode = 'institusi_internasional_lembaga'
                    break;
                  case 'Lembaga Litbang Asing Milik Pemerintah':
                    institusi.kode = 'institusi_internasional_litbang_asing_pemerintah'
                    break;
                  case 'Lembaga Litbang Asing Milik Swasta':
                    institusi.kode = 'institusi_internasional_litbang_asing_swasta'
                    break;
                }
                return institusi;
              });
            });
        },
        checked: ['$stateParams', 'questionFactory',($stateParams, questionFactory) => {
          return questionFactory.getChecked($stateParams.survey_id, 9);
        }],
        year: ['$stateParams', ($stateParams) => $stateParams.year]
      }
    })
    .state('industri.question10', {
      url: '/question-10',
      parent: 'industri',
      no:10,
      component: 'industri.question10',
      resolve: getCustomBindings(10, false)
    })
    .state('industri.question11', {
      url: '/question-11',
      parent: 'industri',
      no:11,
      component: 'industri.question11',
      resolve: {
        answer: ['$state', '$stateParams', 'questionFactory', ($state, $stateParams, questionFactory) =>  {
          return questionFactory.getAnswer($stateParams.survey_id, 11);
        }],
        fokus: ($http, appConfig, User) => {
          const req = {
            method: 'GET',
            url: appConfig.api_url + '/api/industri/fokus-bidang',
            cache: true,
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
              'Authorization': 'Bearer' + ' ' + User.getAuth().access_token
            },
          };

          return $http(req)
            .then((response) => {
              return response.data.data.map((fokus) => {
                switch (fokus.name) {
                  case 'Pangan dan Pertanian':
                    fokus.kode = 'pangan_dan_pertanian'
                    break;
                  case 'Energi':
                    fokus.kode = 'energi'
                    break;
                  case 'Kesehatan dan Obat':
                    fokus.kode = 'kesehatan_dan_obat'
                    break;
                  case 'Teknologi Informasi dan Komunikasi':
                    fokus.kode = 'teknologi_informasi_dan_komunikasi'
                    break;
                  case 'Pertahanan dan Keamanan':
                    fokus.kode = 'pertahanan_dan_keamanan'
                    break;
                  case 'Material Maju':
                    fokus.kode = 'material'
                    break;
                  case 'Teknologi dan Manajemen Transportasi':
                    fokus.kode = 'teknologi_dan_manajemen_transportasi'
                    break;
                  case 'Maritim':
                    fokus.kode = 'maritim'
                    break;
                  case 'Kebencanaan':
                    fokus.kode = 'kebencanaan'
                    break;
                }

                return fokus;
              });
            });
        },
        checked: ['$stateParams', 'questionFactory',($stateParams, questionFactory) => {
          return questionFactory.getChecked($stateParams.survey_id, 11);
        }],
        year: ['$stateParams', ($stateParams) => $stateParams.year]
      }
    })
    .state('industri.question12', {
      url: '/question-12',
      parent: 'industri',
      no:12,
      component: 'industri.question12',
      resolve: getCustomBindings(12, false)
    })
    .state('industri.question13', {
      url: '/question-13',
      parent: 'industri',
      no:13,
      component: 'industri.question13',
      resolve: getCustomBindings(13, false)
    })
    .state('industri.question14', {
      url: '/question-14',
      parent: 'industri',
      no:14,
      component: 'industri.question14',
      resolve: getCustomBindings(14, false)
    })
})

.component('industri.question1', question1Component)
.component('industri.question2', question2Component)
.component('industri.question3', question3Component)
.component('industri.question4', question4Component)
.component('industri.question5', question5Component)
.component('industri.question6', question6Component)
.component('industri.question7', question7Component)
.component('industri.question8', question8Component)
.component('industri.question9', question9Component)
.component('industri.question10', question10Component)
.component('industri.question11', question11Component)
.component('industri.question12', question12Component)
.component('industri.question13', question13Component)
.component('industri.question14', question14Component)

.name;

export default homeModule;
