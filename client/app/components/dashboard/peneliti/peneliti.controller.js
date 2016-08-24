class PenelitiController {
  constructor() {

    this.gambar50 = {
      options: {
        chart: {
            type: 'column',
            margin: 75,
            options3d: {
              enabled: true,
                alpha: 20,
                beta:30,
                depth: 200
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
        text: 'Perbandingan Jumlah Peneliti menurut Jenis Kelamin dan Tingkat Pendidikan'
      },
      xAxis: {
        categories: [
          'S1',
          'S2',
          'S3'
        ]
      },
      yAxis: {
        text: 'Jumlah'
      },
      series: [{
        name: "Laki Laki",
        data: [2981, 2185, 900],
      }, {
        name: 'Perempuan',
        data: [1798, 1829, 274],
      }]
    };

    this.gambar51 = {
      options: {
        chart: {
            type: 'column',
            margin: 75,
            options3d: {
              enabled: true,
                alpha: 20,
                beta:30,
                depth: 200
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
        text: 'Perbandingan Jumlah Teknisi menurut Jenis Kelamin dan Tingkat Pendidikan'
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
        data: [431, 432, 2115],
      }, {
        name: 'Perempuan',
        data: [154, 185, 455],
      }]
    };

    this.gambar52 = {
      options: {
        chart: {
            type: 'column',
            margin: 75,
            options3d: {
              enabled: true,
                alpha: 20,
                beta:30,
                depth: 200
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
        text: 'Perbandingan Jumlah Staf Pendukung menurut Jenis Kelamin dan Tingkat Pendidikan'
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
        data: [770, 318, 2668],
      }, {
        name: 'Perempuan',
        data: [444, 251, 940],
      }]
    };

    this.gambar53 = {
      options: {
        chart: {
            type: 'column',
            margin: 75,
            options3d: {
              enabled: true,
                alpha: 15,
                beta:30,
                depth: 200
            }
        },
        plotOptions: {
            column: {
                depth: 40,
                stacking: false,
                grouping: false,
                groupZPadding: 40
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

    this.gambar63 = {
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
                  format: '{point.name}'
              }
          }
        }
      },
      title: {
        text: 'Distribusi Peneliti menurut Jabatan Fungsional'
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      series: [{
        name: 'Jumlah Personil',
        colorByPoint: true,
        data: [
        {
          name: 'Fungsional Peneliti',
          y: 56,
          sliced: true,
          selected: true
        }, {
          name: 'Funsional Non-peneliti',
          sliced: true,
          y: 18
        },{
          name: 'Non-fungsional',
          sliced: true,
          y: 26
        }]
      }]
    };

    this.gambar64 = {
      options: {
        chart: {
          height: 600,
          type: 'bar'
        },
        plotOptions: {
          series: {
            stacking: 'normal'
          }
        },
      },
      title: {
        text: 'Distribusi Peneliti menurut Jabatan Fungsional di Tiap Lembaga'
      },
      xAxis: {
        categories: [
          'Kementrian Pertanian',
          'BPPT',
          'Kementrian Perindutrian',
          'LIPI',
          'Balitbangda',
          'Kementrian Kebudayaan Dan Pariwisata',
          'Kementrian Kehutanan',
          'BATAN',
          'Kementrian Pekerjaan Umum',
          'Kementrian Kelautan dan Perikanan',
          'Kementrian Kesehatan',
          'Bappeda',
          'Kementrian Komunikasi dan Informatika',
          'Kementrian Perhubungan',
          'Kementrian Pertahanan',
          'Kementrian ESDM',
          'Kementrian Agama',
          'Kementrian Sosial',
          'Kementrian Tenaga Kerja dan Transmigrasi',
          'Kementrian Hukum dan HAM',
          'Kementrian Koperasi dan UKM',
          'Kementrian Luar Negeri',
          'Kementrian Pendidikan Nasional',
          'Kementrian Perdagangan',
          'BSN',
          'Bakosurtanal',
          'LAPAN'
        ]
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
          data: [5,3,4,3,4,6,7,4,2,6,7,8,9,4,4,5,7,2,9,4,7,3,8,1,4,9,9]
      }, {
          name: 'Kendaraan, Mesin dan Peralatan',
          data: [2,2,3,5,6,7,8,5,3,2,3,5,7,2,1,3,8,8,9,5,3,5,2,5,3,2,2]
      }, {
          name: 'Belanja Pegawai',
          data: [3, 4, 4]
      },{
          name: 'Belanja Operasional',
          data: [3, 4, 4]
      }]
    };

    this.gambar49 = {
      options: {
        chart: {
          height: 600,
          type: 'bar'
        },
        plotOptions: {
          series: {
            stacking: 'normal'
          }
        },
      },
      title: {
        text: 'Jumlah Peneliti Litbang per Lembaga menurut Tingakat Pendidikan'
      },
      xAxis: {
        categories: [
          'Kementrian Pertanian',
          'BPPT',
          'Kementrian Perindutrian',
          'LIPI',
          'Balitbangda',
          'Kementrian Kebudayaan Dan Pariwisata',
          'Kementrian Kehutanan',
          'BATAN',
          'Kementrian Pekerjaan Umum',
          'Kementrian Kelautan dan Perikanan',
          'Kementrian Kesehatan',
          'Bappeda',
          'Kementrian Komunikasi dan Informatika',
          'Kementrian Perhubungan',
          'Kementrian Pertahanan',
          'Kementrian ESDM',
          'Kementrian Agama',
          'Kementrian Sosial',
          'Kementrian Tenaga Kerja dan Transmigrasi',
          'Kementrian Hukum dan HAM',
          'Kementrian Koperasi dan UKM',
          'Kementrian Luar Negeri',
          'Kementrian Pendidikan Nasional',
          'Kementrian Perdagangan',
          'BSN',
          'Bakosurtanal',
          'LAPAN'
        ]
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
          data: [5,3,4,3,4,6,7,4,2,6,7,8,9,4,4,5,7,2,9,4,7,3,8,1,4,9,9]
      }, {
          name: 'Kendaraan, Mesin dan Peralatan',
          data: [2,2,3,5,6,7,8,5,3,2,3,5,7,2,1,3,8,8,9,5,3,5,2,5,3,2,2]
      }, {
          name: 'Belanja Pegawai',
          data: [3, 4, 4]
      },{
          name: 'Belanja Operasional',
          data: [3, 4, 4]
      }]
    };
  }
}

export default PenelitiController;
