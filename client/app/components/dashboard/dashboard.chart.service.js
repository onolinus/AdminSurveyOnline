class ChartService {
  constructor($http, $timeout, User, apiURL, chartFactory) {
    "ngInject";

    this.$http = $http;
    this.User = User;
    this.apiURL = apiURL;
    this.chartFactory = chartFactory;
    this.$timeout = $timeout;
  }

  countResponden = () => {
    let countRespondenConfig = this.chartFactory.generateChartConfig('bar', 'Grafik Sebaran Responden Menurut Lembaga yang sudah registrasi');

    angular.extend(countRespondenConfig, {loading: true});

    const respondenCountReq = {
      method: 'GET',
      url: this.apiURL + '/stats/lembaga/countuser',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Authorization': 'Bearer' + ' ' + this.User.getAuth().access_token
      },
    };

    let categories = [], data = [];

    return this.$http(respondenCountReq)
      .then((response) => {

        angular.forEach(response.data.data, (lembaga, index) => {
          categories.push(lembaga.name);
          data.push(parseInt(lembaga.count, 10));
        });

        angular.extend(countRespondenConfig, {
          xAxis: {
            categories: categories,
            title: {
              text: 'Nama Lembaga'
            }
          },
          yAxis: {
            min: 0,
            title: {
              text: 'Jumlah Responden',
              align: 'high'
            },
            labels: {
              overflow: 'justify'
            }
          },
          series: [{
            id: 'allResponden',
            name: 'Responden',
            data: data
          }]}
        );

        angular.extend(countRespondenConfig, {loading: false});

        return countRespondenConfig;
      });
  }

  submittedResponden = () => {
    let submittedRespondenConfig = this.chartFactory.generateChartConfig('bar', 'Grafik Sebaran Responden Menurut Lembaga yang sudah mengirimkan');

    angular.extend(submittedRespondenConfig, {loading: true});

    const submittedRespondenCountReq = {
      method: 'GET',
      url: this.apiURL + '/stats/answers/sent',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Authorization': 'Bearer' + ' ' + this.User.getAuth().access_token
      },
    };

    let submittedRespondenCategories = [], submittedRespondenData = [];

    return this.$http(submittedRespondenCountReq)
      .then((response) => {
        angular.forEach(response.data.data, (lembaga, index) => {
          submittedRespondenCategories.push(lembaga.name);
          submittedRespondenData.push(parseInt(lembaga.count, 10));
        });

        angular.extend(submittedRespondenConfig, {
          xAxis: {
            categories: submittedRespondenCategories,
            title: {
              text: 'Nama Lembaga'
            }
          },
          yAxis: {
            min: 0,
            title: {
              text: 'Jumlah Responden',
              align: 'high'
            },
            labels: {
              overflow: 'justify'
            }
          },
          series: [{
            id: 'submittedResponden',
            name: 'Responden',
            data: submittedRespondenData
          }]}
        );

        angular.extend(submittedRespondenConfig, {loading: false});

        return submittedRespondenConfig;
      });
  }

  summaryStats = () => {
    const summaryReq = {
      method: 'GET',
      url: this.apiURL + '/stats/total/summary',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Authorization': 'Bearer' + ' ' + this.User.getAuth().access_token
      },
    };

    return this.$http(summaryReq).then((response) => {
      return response.data.data;
    })
  }

  graph4 = () => {
    let graphConfig = this.chartFactory.generateChartConfig('bar', 'Total Belanja Litbang Sektor Pemerintah menurut Lembaga Pelaksana');

    angular.extend(graphConfig, {loading: true});

    const graph4Req = {
      method: 'GET',
      url: this.apiURL + '/stats/lembaga/totalbelanja',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Authorization': 'Bearer' + ' ' + this.User.getAuth().access_token
      },
    };

    let categories = [], data = [];

    return this.$http(graph4Req).then((response) => {
      angular.forEach(response.data.data, (lembaga, index) => {
        categories.push(lembaga.name);
        data.push(lembaga.total_in_milyar);
      });

      angular.extend(graphConfig, {
        xAxis: {
          categories: categories,
          title: {
            text: 'Nama Lembaga'
          }
        },
        yAxis: {
          min: 0,
          title: {
            text: 'Miliar Rupiah',
            align: 'high'
          },
          labels: {
            overflow: 'justify'
          }
        },
        series: [{
          id: 'allAnggaran',
          name: 'Total Anggaran',
          data: data
        }]}
      );

      angular.extend(graphConfig, {loading: false});

      return graphConfig;
    });
  }

  graph5 = () => {
    const graph5Req = {
      method: 'GET',
      url: this.apiURL + '/stats/totalbelanja/jenispengeluaran',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Authorization': 'Bearer' + ' ' + this.User.getAuth().access_token
      },
    };

    return this.$http(graph5Req).then((response) => {
      let graphConf = {
        options: {
          chart: {
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie',
            options3d: {
              enabled: true,
              alpha: 45,
              beta: 0
            }
          },
          plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                depth: 35,
                dataLabels: {
                  enabled: true,
                  format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                }
            }
          }
        },
        title: {
          text: 'Distribusi Total Belanja Litbang menurut Jenis Pengeluaran'
        },
        tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        }
      };

      graphConf['series'] = [{
        type:'pie',
        name: 'Total Belanja',
        colorByPoint: true,
        data: [
        {
          name: 'Operasional',
          y: response.data.data.belanja_operasional_maintenance.value,
          sliced: true,
          selected: true
        }, {
          name: 'Belanja Pegawai',
          sliced: true,
          y: response.data.data.belanja_pegawai_upah.value
        },{
          name: 'Tanah Gedung dan Bangunan',
          sliced: true,
          y: response.data.data.belanja_modal_properti.value
        },{
          name: 'Peralatan Mesin dan Kendaraan',
          sliced: true,
          y: response.data.data.belanja_modal_mesin.value
        }]
      }];


      return graphConf;
    })
  }

  graph6 = () => {
    const graph5Req = {
      method: 'GET',
      url: this.apiURL + '/stats/totalbelanja/jenispengeluaran/lembaga',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Authorization': 'Bearer' + ' ' + this.User.getAuth().access_token
      },
    };

    let categories = [], data = {
      belanja_modal_properti : [],
      belanja_modal_mesin : [],
      belanja_pegawai_upah : [],
      belanja_operasional_maintenance : []
    };

    return this.$http(graph5Req).then((response) => {
      angular.forEach(response.data.data, (lembaga, index) => {
        categories.push(lembaga.name);
        data.belanja_modal_properti.push(lembaga.data.belanja_modal_properti.value || 0);
        data.belanja_modal_mesin.push(lembaga.data.belanja_modal_mesin.value || 0);
        data.belanja_pegawai_upah.push(lembaga.data.belanja_pegawai_upah.value || 0);
        data.belanja_operasional_maintenance.push(lembaga.data.belanja_operasional_maintenance.value || 0);
      });

      let graphConf = {
        options: {
          chart: {
            height: 615,
            type: 'bar'
          },
          plotOptions: {
            series: {
              stacking: 'normal'
            },

          },
        },
        title: {
          text: 'Jenis Pengeluaran Belanja Litbang Menurut Lembaga'
        },
        xAxis: {
          categories: categories
        },
        yAxis: {
          min: 0,
          title: {
            text: 'Total fruit consumption'
          }
        },
        legend: {
          reversed: true
        },
        series: [{
            name: 'Tanah, Gedung dan Bangunan',
            data: data.belanja_modal_properti
        }, {
            name: 'Kendaraan, Mesin dan Peralatan',
            data: data.belanja_modal_mesin
        }, {
            name: 'Belanja Pegawai',
            data: data.belanja_pegawai_upah
        },{
            name: 'Belanja Operasional',
            data: data.belanja_operasional_maintenance
        }]
      };

      return graphConf;
    });
  }

  graph7a = () => {
    const graph7Req = {
      method: 'GET',
      url: this.apiURL + '/stats/totalbelanja/jenissumberdana',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Authorization': 'Bearer' + ' ' + this.User.getAuth().access_token
      },
    };

    let categories = [], data = {
      belanja_modal_properti : [],
      belanja_modal_mesin : [],
      belanja_pegawai_upah : [],
      belanja_operasional_maintenance : []
    };

    return this.$http(graph7Req).then((response) => {
      let graphConf = {
        options: {
          chart: {
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie',
            options3d: {
              enabled: true,
              alpha: 45,
              beta: 0
            }
          },
          plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                depth: 35,
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                }
            }
          }
        },
        title: {
          text: 'Total Belanja Litbang Sektor Pemerintah menurut Sumber Pendanaan (DIPA)'
        },
        series: [{
          name: 'Total Belanja',
          colorByPoint: true,
          data: [
          {
            name: 'DIPA Pemerintah',
            y: response.data.data.dipa.data.dipa_danapemerintah.value,
            sliced: true,
            selected: true
          }, {
            name: 'PNPB Instansi Pemerintah',
            sliced: true,
            y: response.data.data.dipa.data.dipa_pnbp_instansipemerintah.value
          },{
            name: 'PNPB Luar Negeri',
            sliced: true,
            y: response.data.data.dipa.data.dipa_pnbp_luarnegeri.value
          },{
            name: 'PNPB.Perusahaan Swasta',
            sliced: true,
            y: response.data.data.dipa.data.dipa_pnbp_perusahaanswasta.value
          },{
            name: 'PNPB Swasta Non Profit',
            sliced: true,
            y: response.data.data.dipa.data.dipa_pnbp_swastanonprofit.value
          }]
        }]
      };

      return graphConf
    });
  }

  graph7b = () => {
    const graph7Req = {
      method: 'GET',
      url: this.apiURL + '/stats/totalbelanja/jenissumberdana',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Authorization': 'Bearer' + ' ' + this.User.getAuth().access_token
      },
    };

    let categories = [], data = {
      belanja_modal_properti : [],
      belanja_modal_mesin : [],
      belanja_pegawai_upah : [],
      belanja_operasional_maintenance : []
    };

    return this.$http(graph7Req).then((response) => {
      let graphConf = {
        options: {
          chart: {
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie',
            options3d: {
              enabled: true,
              alpha: 45,
              beta: 0
            }
          },
          plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                depth: 35,
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                }
            }
          }
        },
        title: {
          text: 'Total Belanja Litbang Sektor Pemerintah menurut Sumber Pendanaan (Non DIPA)'
        },
        tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        series: [{
          name: 'Total Belanja',
          colorByPoint: true,
          data: [
          {
            name: 'Insentif Dalam Negri',
            y: response.data.data.nondipa.data.nondipa_insentif_dalamnegeri.value,
            sliced: true,
            selected: true
          }, {
            name: 'Research Grant',
            sliced: true,
            y: response.data.data.nondipa.data.nondipa_insentif_researchgrant.value
          },{
            name: 'Insentif Ristekdikti',
            sliced: true,
            y: response.data.data.nondipa.data.nondipa_insentif_ristekdikti.value
          }]
        }]
      };

      return graphConf
    });
  }

  graph9 = () => {
    const graph9Req = {
      method: 'GET',
      url: this.apiURL + '/stats/totalbelanja/jenispenelitian',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Authorization': 'Bearer' + ' ' + this.User.getAuth().access_token
      },
    };

    return this.$http(graph9Req).then((response) => {
      let graphConf = {
        options: {
          chart: {
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie',
            options3d: {
              enabled: true,
              alpha: 45,
              beta: 0
            }
          },
          plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                depth: 35,
                dataLabels: {
                  enabled: true,
                  format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                }
            }
          }
        },
        title: {
          text: 'Total Belanja Litbang menurut Jenis Penelitian'
        },
        tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        credits: {
            enabled: false
        },
        series: [{
          name: 'Total Belanja',
          colorByPoint: true,
          data: [
          {
            name: 'Penelitian Terapan',
            y: response.data.data.penelitian_terapan.value,
            sliced: true,
            selected: true
          }, {
            name: 'Pengembangan Experimental',
            y: response.data.data.pengembangan_eksperimental.value
          },{
            name: 'Penelitian Dasar',
            y: response.data.data.penelitian_dasar.value
          }]
        }]
      };

      return graphConf;
    });
  }

  graph11 = () => {
    const graph11Req = {
      method: 'GET',
      url: this.apiURL + '/stats/totalbelanja/bidang-penelitian',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Authorization': 'Bearer' + ' ' + this.User.getAuth().access_token
      },
    };

    return this.$http(graph11Req).then((response) => {
      let series_data = [];

      angular.forEach(response.data.data, (data) => {
        series_data.push({
          name: Object.keys(data)[0],
          y: data[Object.keys(data)[0]].value,
          sliced: true,
          selected: true
        });
      });

      let graphConf = {
        options: {
          chart: {
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie',
            options3d: {
              enabled: true,
              alpha: 45,
              beta: 0
            }
          },
          plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                depth: 35,
                dataLabels: {
                  enabled: true,
                  format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                }
            }
          }
        },
        title: {
          text: 'Total Belanja Litbang menurut Bidang Penelitian '
        },
        tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        credits: {
            enabled: false
        },
        series: [{
          name: 'Total Belanja',
          colorByPoint: true,
          data: series_data
        }]
      };

      return graphConf;
    });
  }

  graph17 = () => {
    // const graph17Req = {
    //   method: 'GET',
    //   url: this.apiURL + '/stats/totalbelanja/sosial-ekonomi',
    //   headers: {
    //     'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    //     'Authorization': 'Bearer' + ' ' + this.User.getAuth().access_token
    //   },
    // };

    // return this.$http(graph17Req).then((response) => {

    //   console.log('graph9', response);
    //   let graphConf = {
    //     options: {
    //       chart: {
    //         plotBorderWidth: null,
    //         plotShadow: false,
    //         type: 'pie',
    //         options3d: {
    //           enabled: true,
    //           alpha: 45,
    //           beta: 0
    //         }
    //       },
    //       plotOptions: {
    //         pie: {
    //             allowPointSelect: true,
    //             cursor: 'pointer',
    //             depth: 35,
    //             dataLabels: {
    //               enabled: true,
    //               format: '<b>{point.name}</b>: {point.percentage:.1f} %'
    //             }
    //         }
    //       }
    //     },
    //     title: {
    //       text: 'Tujuan Sosio Ekonomi Litbang Sektor Pemerintah  '
    //     },
    //     tooltip: {
    //       pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    //     },
    //     credits: {
    //         enabled: false
    //     },
    //     series: [{
    //       name: 'Total Belanja',
    //       colorByPoint: true,
    //       data: [
    //       {
    //         name: 'Penelitian Terapan',
    //         y: response.data.data.penelitian_terapan.value,
    //         sliced: true,
    //         selected: true
    //       }, {
    //         name: 'Pengembangan Experimental',
    //         y: response.data.data.pengembangan_eksperimental.value
    //       },{
    //         name: 'Penelitian Dasar',
    //         y: response.data.data.penelitian_dasar.value
    //       }]
    //     }]
    //   };

    //   return graphConf;
    // });
  }


  graph42 = () => {
    // const graph42Req = {
    //   method: 'GET',
    //   url: this.apiURL + '/stats/compare/intramural-ekstramural',
    //   headers: {
    //     'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    //     'Authorization': 'Bearer' + ' ' + this.User.getAuth().access_token
    //   },
    // };

    // return this.$http(graph42Req).then((response) => {

    //   let graphConf = {
    //     options: {
    //       chart: {
    //         plotBorderWidth: null,
    //         plotShadow: false,
    //         type: 'pie',
    //         options3d: {
    //           enabled: true,
    //           alpha: 45,
    //           beta: 0
    //         }
    //       },
    //       plotOptions: {
    //         pie: {
    //             allowPointSelect: true,
    //             cursor: 'pointer',
    //             depth: 35,
    //             dataLabels: {
    //               enabled: true,
    //               format: '<b>{point.name}</b>: {point.percentage:.1f} %'
    //             }
    //         }
    //       }
    //     },
    //     title: {
    //       text: 'Belanja Litbang Ekstramural dan Intramural '
    //     },
    //     tooltip: {
    //       pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    //     },
    //     credits: {
    //         enabled: false
    //     },
    //     series: [{
    //       name: 'Total Belanja',
    //       colorByPoint: true,
    //       data: [
    //       {
    //         name: 'Penelitian Terapan',
    //         y: response.data.data.penelitian_terapan.value,
    //         sliced: true,
    //         selected: true
    //       }, {
    //         name: 'Pengembangan Experimental',
    //         y: response.data.data.pengembangan_eksperimental.value
    //       },{
    //         name: 'Penelitian Dasar',
    //         y: response.data.data.penelitian_dasar.value
    //       }]
    //     }]
    //   };

    //   return graphConf;
    // });
  }

  graph43 = () => {
    // const graph43Req = {
    //   method: 'GET',
    //   url: this.apiURL + '/stats/totalbelanja/ekstramural/pelaksana',
    //   headers: {
    //     'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    //     'Authorization': 'Bearer' + ' ' + this.User.getAuth().access_token
    //   },
    // };

    // return this.$http(graph43Req).then((response) => {

    //   let graphConf = {
    //     options: {
    //       chart: {
    //         plotBorderWidth: null,
    //         plotShadow: false,
    //         type: 'pie',
    //         options3d: {
    //           enabled: true,
    //           alpha: 45,
    //           beta: 0
    //         }
    //       },
    //       plotOptions: {
    //         pie: {
    //             allowPointSelect: true,
    //             cursor: 'pointer',
    //             depth: 35,
    //             dataLabels: {
    //               enabled: true,
    //               format: '<b>{point.name}</b>: {point.percentage:.1f} %'
    //             }
    //         }
    //       }
    //     },
    //     title: {
    //       text: 'Belanja Litbang Ekstramural menurut Pelaksana'
    //     },
    //     tooltip: {
    //       pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    //     },
    //     credits: {
    //         enabled: false
    //     },
    //     series: [{
    //       name: 'Total Belanja',
    //       colorByPoint: true,
    //       data: [
    //       {
    //         name: 'Penelitian Terapan',
    //         y: response.data.data.penelitian_terapan.value,
    //         sliced: true,
    //         selected: true
    //       }, {
    //         name: 'Pengembangan Experimental',
    //         y: response.data.data.pengembangan_eksperimental.value
    //       },{
    //         name: 'Penelitian Dasar',
    //         y: response.data.data.penelitian_dasar.value
    //       }]
    //     }]
    //   };

    //   return graphConf;
    // });
    //


  }
}

export default ChartService;
