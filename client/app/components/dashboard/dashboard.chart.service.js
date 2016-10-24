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
      angular.extend(graphConfig.options, {tooltip: {
        formatter: function() {
          return this.x +'<br> Total Belanja : <b>Rp '+ Highcharts.numberFormat(this.y, 2, '.', ',') +'</b> Milyar';
        }
      }});

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
                  format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                },
            }
          },
          tooltip: {
            formatter: function() {
              return this.point.name +'<br> Total Belanja : <b>Rp '+ Highcharts.numberFormat(this.y, 0, '.', ',') +'</b>';
            }
          }
        },
        title: {
          text: 'Distribusi Total Belanja Litbang menurut Jenis Pengeluaran'
        },
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
          tooltip: {
            formatter: function() {
              return this.x +'<br> Total Belanja : <b>Rp '+ Highcharts.numberFormat(this.y, 0, '.', ',') +'</b>';
            }
          }
        },
        title: {
          text: 'Jenis Pengeluaran Belanja Litbang Menurut Lembaga'
        },
        xAxis: {
          categories: categories,
        },
        yAxis: {
          min: 0,
          labels: {
            enabled: false
          },
          title: {
            text: null
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
          },
          tooltip: {
            formatter: function() {
              return this.point.name +'<br> Total Belanja : <b>Rp '+ Highcharts.numberFormat(this.y, 0, '.', ',') +'</b>';
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
          },
          tooltip: {
            formatter: function() {
              return this.point.name +'<br> Total Belanja : <b>Rp '+ Highcharts.numberFormat(this.y, 0, '.', ',') +'</b>';
            }
          }
        },
        title: {
          text: 'Total Belanja Litbang Sektor Pemerintah menurut Sumber Pendanaan (Non DIPA)'
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
          },
          tooltip: {
            formatter: function() {
              return this.point.name +'<br> Total Belanja : <b>Rp '+ Highcharts.numberFormat(this.y, 0, '.', ',') +'</b>';
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
    const graph17Req = {
      method: 'GET',
      url: this.apiURL + '/stats/totalbelanja/sosial-ekonomi',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Authorization': 'Bearer' + ' ' + this.User.getAuth().access_token
      },
    };

    return this.$http(graph17Req).then((response) => {
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
          text: 'Tujuan Sosio Ekonomi Litbang Sektor Pemerintah  '
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

  graph42 = () => {
    const graph42Req = {
      method: 'GET',
      url: this.apiURL + '/stats/compare/intramural-ekstramural',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Authorization': 'Bearer' + ' ' + this.User.getAuth().access_token
      },
    };

    return this.$http(graph42Req).then((response) => {
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
          text: 'Belanja Litbang Ekstramural dan Intramural '
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

  graph43 = () => {
    const graph43Req = {
      method: 'GET',
      url: this.apiURL + '/stats/totalbelanja/ekstramural/pelaksana',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Authorization': 'Bearer' + ' ' + this.User.getAuth().access_token
      },
    };

    return this.$http(graph43Req).then((response) => {
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
          text: 'Belanja Litbang Ekstramural menurut Pelaksana'
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

  graph46 = () => {
    const graph46Req = {
      method: 'GET',
      url: this.apiURL + '/stats/personil/klasifikasi',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Authorization': 'Bearer' + ' ' + this.User.getAuth().access_token
      },
    };

    return this.$http(graph46Req).then((response) => {
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
          text: response.data.meta.title
        },
        tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        credits: {
            enabled: false
        },
        series: [{
          name: 'Jumlah',
          colorByPoint: true,
          data: [{
              name: 'Peneliti',
              y: response.data.data.peneliti.value,
              sliced: true,
              selected: true
            },{
              name: 'Teknisi',
              y: response.data.data.teknisi.value,
              sliced: true,
              selected: true
            },{
              name: 'Staff Pendukung',
              y: response.data.data.staffpendukung.value,
              sliced: true,
              selected: true
            }]
        }]
      };

      return graphConf;
    });
  }

  graph47 = () => {
    const graph47Req = {
      method: 'GET',
      url: this.apiURL + '/stats/personil/tingkat-pendidikan',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Authorization': 'Bearer' + ' ' + this.User.getAuth().access_token
      },
    };

    return this.$http(graph47Req).then((response) => {
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
              type: 'column',
              margin: 75,
              options3d: {
                enabled: true,
                  alpha: 0,
                  beta:0,
                  depth: 100
              }
          },
          plotOptions: {
              column: {
                  depth: 40,
                  stacking: false,
                  grouping: true,
                  groupZPadding: 40
              }
          },
        },
        title: {
          text: response.data.meta.title
        },
        xAxis: {
          categories: [
            'S3',
            'S2',
            'S1',
            'D3',
            '<D3'
          ]
        },
        yAxis: {
          text: 'Jumlah'
        },
        series: [{
          name: "Peneliti",
          data: [response.data.data.s3.peneliti.value, response.data.data.s2.peneliti.value, response.data.data.s1.peneliti.value, response.data.data.d3.peneliti.value, response.data.data.belowd3.peneliti.value],
        }, {
          name: 'Teknisi',
          data: [response.data.data.s3.teknisi.value, response.data.data.s2.teknisi.value, response.data.data.s1.teknisi.value, response.data.data.d3.teknisi.value,response.data.data.belowd3.teknisi.value],
        }, {
          name: 'Staff Pendukung',
          data: [response.data.data.s3.staffpendukung.value,response.data.data.s2.staffpendukung.value, response.data.data.s1.staffpendukung.value, response.data.data.d3.staffpendukung.value, response.data.data.belowd3.staffpendukung.value],
        }]
      };

      return graphConf;
    });
  }

  graph48 = () => {
    const graph48Req = {
      method: 'GET',
      url: this.apiURL + '/stats/personil/gender',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Authorization': 'Bearer' + ' ' + this.User.getAuth().access_token
      },
    };

    return this.$http(graph48Req).then((response) => {
      let graphConf = {
        options: {
          chart: {
              type: 'column',
              margin: 75,
              options3d: {
                enabled: true,
                  alpha: 20,
                  beta:20,
                  depth: 200
              }
          },
          plotOptions: {
              column: {
                  depth: 40,
                  stacking: true,
                  grouping: false,
                  groupZPadding: 40
              }
          },
        },
        title: {
          text: response.data.meta.title
        },
        xAxis: {
          categories: [
            'Peneliti',
            'Teknisi',
            'Pendukung'
          ]
        },
        yAxis: {
          text: 'Jumlah'
        },
        series: [{
          name: "Laki Laki",
          data: [response.data.data.lakilaki.peneliti.value, response.data.data.lakilaki.teknisi.value, response.data.data.lakilaki.staffpendukung.value],
        }, {
          name: 'Perempuan',
          data: [response.data.data.perempuan.peneliti.value, response.data.data.perempuan.teknisi.value, response.data.data.perempuan.staffpendukung.value],
        }]
      };

      return graphConf;
    });
  }

  graph50 = () => {
    const graph50Req = {
      method: 'GET',
      url: this.apiURL + '/stats/personil/peneliti/tingkat-pendidikan/gender',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Authorization': 'Bearer' + ' ' + this.User.getAuth().access_token
      },
    };

    return this.$http(graph50Req).then((response) => {
      let graphConf = {
        options: {
          chart: {
              type: 'column',
              margin: 75,
              options3d: {
                enabled: true,
                  alpha: 0,
                  beta:0,
                  depth: 100
              }
          },
          plotOptions: {
              column: {
                  depth: 40,
                  stacking: false,
                  grouping: true,
                  groupZPadding: 40
              }
          },
        },
        title: {
          text: response.data.meta.title
        },
        xAxis: {
          categories: [
            'S3',
            'S2',
            'S1'
          ]
        },
        yAxis: {
          text: 'Jumlah'
        },
        series: [{
          name: "Laki Laki",
          data: [response.data.data.s3.lakilaki.value, response.data.data.s2.lakilaki.value, response.data.data.s1.lakilaki.value],
        }, {
          name: 'Perempuan',
          data: [response.data.data.s3.perempuan.value, response.data.data.s2.perempuan.value,response.data.data.s1.perempuan.value],
        }]
      };

      return graphConf;
    });
  }

  graph51 = () => {
    const graph51Req = {
      method: 'GET',
      url: this.apiURL + '/stats/personil/teknisi/tingkat-pendidikan/gender',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Authorization': 'Bearer' + ' ' + this.User.getAuth().access_token
      },
    };

    return this.$http(graph51Req).then((response) => {
      let graphConf = {
        options: {
          chart: {
              type: 'column',
              margin: 75,
              options3d: {
                enabled: true,
                  alpha: 0,
                  beta:0,
                  depth: 100
              }
          },
          plotOptions: {
              column: {
                  depth: 40,
                  stacking: false,
                  grouping: true,
                  groupZPadding: 40
              }
          },
        },
        title: {
          text: response.data.meta.title
        },
        xAxis: {
          categories: [
            'S1',
            'D3',
            '<D3'
          ]
        },
        yAxis: {
          text: 'Jumlah'
        },
        series: [{
          name: "Laki Laki",
          data: [response.data.data.s1.lakilaki.value, response.data.data.d3.lakilaki.value, response.data.data.belowd3.lakilaki.value],
        }, {
          name: 'Perempuan',
          data: [response.data.data.s1.perempuan.value, response.data.data.d3.perempuan.value,response.data.data.belowd3.perempuan.value],
        }]
      };

      return graphConf;
    });
  }

  graph52 = () => {
    const graph52Req = {
      method: 'GET',
      url: this.apiURL + '/stats/personil/staffpendukung/tingkat-pendidikan/gender',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Authorization': 'Bearer' + ' ' + this.User.getAuth().access_token
      },
    };

    return this.$http(graph52Req).then((response) => {
      let graphConf = {
        options: {
          chart: {
              type: 'column',
              margin: 75,
              options3d: {
                enabled: true,
                  alpha: 0,
                  beta:0,
                  depth: 100
              }
          },
          plotOptions: {
              column: {
                  depth: 40,
                  stacking: false,
                  grouping: true,
                  groupZPadding: 40
              }
          },
        },
        title: {
          text: response.data.meta.title
        },
        xAxis: {
          categories: [
            'S1',
            'D3',
            '<D3'
          ]
        },
        yAxis: {
          text: 'Jumlah'
        },
        series: [{
          name: "Laki Laki",
          data: [response.data.data.s1.lakilaki.value, response.data.data.d3.lakilaki.value, response.data.data.belowd3.lakilaki.value],
        }, {
          name: 'Perempuan',
          data: [response.data.data.s1.perempuan.value, response.data.data.d3.perempuan.value,response.data.data.belowd3.perempuan.value],
        }]
      };

      return graphConf;
    });
  }

  graph53 = () => {
    const graph53 = {
      method: 'GET',
      url: this.apiURL + '/stats/personil/peneliti/bidang-ilmu',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Authorization': 'Bearer' + ' ' + this.User.getAuth().access_token
      },
    };

    return this.$http(graph53).then((response) => {
      let graphConf = {
        options: {
          chart: {
            renderTo: 'graph53',
            type: 'column',
            margin: 100,
            options3d: {
              enabled: true,
              alpha: 10,
              beta: 30,
              depth: 250,
              viewDistance: 25,
            }
          },
          plotOptions: {
            column: {
              grouping: false,
              groupZPadding: 40,
              depth: 25
            }
          },
          legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            x: -10,
            y: 100,
            borderWidth: 0
          },
        },
        title: {
          text: 'Peneliti menurut Bidang Ilmu pada Pendidikan Terakhir'
        },
        xAxis: {
          categories: [
            'Agricukultural Sciences',
            'Astronomy and Astrophysics',
            'Chemistry',
            'Earth and Space Sciences',
            'Life Siences',
            'Logic',
            'Mathematics',
            'Medical Sciences',
            'Physics',
            'Technological Sciences',
            'Economic Sciences',
            'Political Sciences',
            'Sociology',
            'Other Social Sciences'
          ]
        },
        yAxis: {
          text: 'Jumlah'
        },
        series: [{
          name: "S3",
          data: [301, 0, 20, 111, 140, 0, 11, 4, 5, 256, 10, 3, 0, 5],
        }, {
          name: 'S2',
          data: [3401, 794, 1635],
        }, {
          name: 'S1',
          data: [3401, 794, 1635],
        }]
      };

      return graphConf;
    });
  }


  graph63 = () => {
    const graph63Req = {
      method: 'GET',
      url: this.apiURL + '/stats/personil/peneliti/jabatan-fungsional',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Authorization': 'Bearer' + ' ' + this.User.getAuth().access_token
      },
    };

    return this.$http(graph63Req).then((response) => {
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
          text: response.data.meta.title
        },
        tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        credits: {
            enabled: false
        },
        series: [{
          name: 'Jumlah',
          colorByPoint: true,
          data: [{
              name: 'Fungsional',
              y: response.data.data.fungsional.value,
              sliced: true,
              selected: true
            },{
              name: 'Fungsional Non-peneliti',
              y: response.data.data.fungsionalnonpeneliti.value,
              sliced: true,
              selected: true
            },{
              name: 'Non-fungsional',
              y: response.data.data.nonfungsional.value,
              sliced: true,
              selected: true
            }]
        }]
      };

      return graphConf;
    });
  }

  graph65 = () => {
    const graph65Req = {
      method: 'GET',
      url: this.apiURL + '/stats/peneliti-luar',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Authorization': 'Bearer' + ' ' + this.User.getAuth().access_token
      },
    };

    return this.$http(graph65Req).then((response) => {

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
          text: response.data.meta.title
        },
        tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        }
      };

      graphConf['series'] = [{
        type:'pie',
        name: 'Jumlah',
        colorByPoint: true,
        data: [
        {
          name: 'Asing',
          y: response.data.data.asing.value,
          sliced: true,
          selected: true
        }, {
          name: 'Industri',
          sliced: true,
          y: response.data.data.industri.value
        },{
          name: 'Lembaga Swadaya',
          sliced: true,
          y: response.data.data.lembagaswadaya.value
        },{
          name: 'Pemerintah',
          sliced: true,
          y: response.data.data.pemerintah.value
        },
        {
          name: 'Perguruan Tinggi',
          sliced: true,
          y: response.data.data.perguruan_tinggi.value
        }]
      }];


      return graphConf;
    })
  }

  graph67 = () => {
    const graph67Req = {
      method: 'GET',
      url: this.apiURL + '/stats/paten',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Authorization': 'Bearer' + ' ' + this.User.getAuth().access_token
      },
    };

    return this.$http(graph67Req).then((response) => {
      const data = response.data.data;

      let graphConf = {
        options: {
          chart: {
              type: 'column',
              margin: 75,
              options3d: {
                enabled: true,
                  alpha: 0,
                  beta:0,
                  depth: 100
              }
          },
          plotOptions: {
              column: {
                  depth: 40,
                  stacking: false,
                  grouping: true,
                  groupZPadding: 40
              }
          },
        },
        title: {
          text: response.data.meta.title
        },
        xAxis: {
          categories: Object.keys(data)
        },
        yAxis: {
          text: 'Jumlah'
        },
        series: [{
          name: "Disetujui",
          data: [data[Object.keys(data)[0]][0].disetujui.value, data[Object.keys(data)[1]][0].disetujui.value, data[Object.keys(data)[2]][0].disetujui.value],
        }, {
          name: 'Terkomersialisasi',
          data: [data[Object.keys(data)[0]][0].terkomersialisasi.value, data[Object.keys(data)[1]][0].terkomersialisasi.value, data[Object.keys(data)[2]][0].terkomersialisasi.value],
        },{
          name: 'Usulan',
          data: [data[Object.keys(data)[0]][0].usulan.value, data[Object.keys(data)[1]][0].usulan.value, data[Object.keys(data)[2]][0].usulan.value],
        }]
      };

      return graphConf;
    });
  }

  graph68 = () => {
    const graph68Req = {
      method: 'GET',
      url: this.apiURL + '/stats/paten-sederhana',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Authorization': 'Bearer' + ' ' + this.User.getAuth().access_token
      },
    };

    return this.$http(graph68Req).then((response) => {
      const data = response.data.data;

      let graphConf = {
        options: {
          chart: {
              type: 'column',
              margin: 75,
              options3d: {
                enabled: true,
                  alpha: 0,
                  beta:0,
                  depth: 100
              }
          },
          plotOptions: {
              column: {
                  depth: 40,
                  stacking: false,
                  grouping: true,
                  groupZPadding: 40
              }
          },
        },
        title: {
          text: response.data.meta.title
        },
        xAxis: {
          categories: Object.keys(data)
        },
        yAxis: {
          text: 'Jumlah'
        },
        series: [
          {
            name: "Disetujui",
            data: [
              data[Object.keys(data)[0]][0].disetujui.value,
              data[Object.keys(data)[1]][0].disetujui.value,
              data[Object.keys(data)[2]][0].disetujui.value],
          },
          {
            name: 'Terkomersialisasi',
            data: [
              data[Object.keys(data)[0]][0].terkomersialisasi.value,
              data[Object.keys(data)[1]][0].terkomersialisasi.value,
              data[Object.keys(data)[2]][0].terkomersialisasi.value],
          },
          {
            name: 'Usulan',
            data: [
              data[Object.keys(data)[0]][0].usulan.value,
              data[Object.keys(data)[1]][0].usulan.value,
              data[Object.keys(data)[2]][0].usulan.value],
          }
        ]
      };

      return graphConf;
    });
  }
}

export default ChartService;
