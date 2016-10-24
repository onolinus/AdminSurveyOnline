class BelanjaController {
  constructor() {
    // this.gambar3 = {
    //   options: {
    //     chart: {
    //       height: 300,
    //       type: 'pie'
    //     }
    //   },
    //   chart: {
    //     plotBackgroundColor: null,
    //     plotBorderWidth: null,
    //     plotShadow: false,
    //     type: 'pie'
    //   },
    //   title: {
    //     text: 'Distribusi Total Belanja Litbang Sektor Pemerintah'
    //   },
    //   tooltip: {
    //     pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    //   },
    //   plotOptions: {
    //     pie: {
    //       allowPointSelect: true,
    //       cursor: 'pointer',
    //       dataLabels: {
    //           enabled: false
    //       },
    //       showInLegend: true
    //     }
    //   },
    //   series: [{
    //     name: 'Total Belanja',
    //     colorByPoint: true,
    //     data: [
    //     {
    //       name: 'LPK',
    //       y: 71.3,
    //       sliced: true,
    //       selected: true
    //     }, {
    //       name: 'LPNK',
    //       sliced: true,
    //       y: 26.76
    //     },{
    //       name: 'Balitbangda/Bappeda',
    //       sliced: true,
    //       y: 1.94
    //     }]
    //   }]
    // };

    // this.gambar5 = {
    //   options: {
    //     chart: {
    //       plotBorderWidth: null,
    //       plotShadow: false,
    //       type: 'pie',
    //       options3d: {
    //         enabled: true,
    //         alpha: 45,
    //         beta: 0
    //       }
    //     },
    //     plotOptions: {
    //       pie: {
    //           allowPointSelect: true,
    //           cursor: 'pointer',
    //           depth: 35,
    //           dataLabels: {
    //               enabled: true,
    //               format: '{point.name}'
    //           }
    //       }
    //     }
    //   },
    //   title: {
    //     text: 'Distribusi Total Belanja Litbang menurut Jenis Pengeluaran'
    //   },
    //   tooltip: {
    //     pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    //   },
    //   series: [{
    //     type:'pie',
    //     name: 'Total Belanja',
    //     colorByPoint: true,
    //     data: [
    //     {
    //       name: 'Operasional',
    //       y: 46.59,
    //       sliced: true,
    //       selected: true
    //     }, {
    //       name: 'Belanja Pegawai',
    //       sliced: true,
    //       y: 30.18
    //     },{
    //       name: 'Tanah Gedung dan Bangunan',
    //       sliced: true,
    //       y: 7.44
    //     },{
    //       name: 'Peralatan Mesin dan Kendaraan',
    //       sliced: true,
    //       y: 15.80
    //     }]
    //   }]
    // };

    // this.gambar6 = {
    //   options: {
    //     chart: {
    //       height: 615,
    //       type: 'bar'
    //     },
    //     plotOptions: {
    //       series: {
    //         stacking: 'normal'
    //       }
    //     },
    //   },
    //   title: {
    //     text: 'Jenis Pengeluaran Belanja Litbang Menurut Lembaga'
    //   },
    //   xAxis: {
    //     categories: [
    //       'Kementrian Pertanian',
    //       'BPPT',
    //       'Kementrian Perindutrian',
    //       'LIPI',
    //       'Balitbangda',
    //       'Kementrian Kebudayaan Dan Pariwisata',
    //       'Kementrian Kehutanan',
    //       'BATAN',
    //       'Kementrian Pekerjaan Umum',
    //       'Kementrian Kelautan dan Perikanan',
    //       'Kementrian Kesehatan',
    //       'Bappeda',
    //       'Kementrian Komunikasi dan Informatika',
    //       'Kementrian Perhubungan',
    //       'Kementrian Pertahanan',
    //       'Kementrian ESDM',
    //       'Kementrian Agama',
    //       'Kementrian Sosial',
    //       'Kementrian Tenaga Kerja dan Transmigrasi',
    //       'Kementrian Hukum dan HAM',
    //       'Kementrian Koperasi dan UKM',
    //       'Kementrian Luar Negeri',
    //       'Kementrian Pendidikan Nasional',
    //       'Kementrian Perdagangan',
    //       'BSN',
    //       'Bakosurtanal',
    //       'LAPAN'
    //     ]
    //   },
    //   yAxis: {
    //     min: 0,
    //     title: {
    //       text: 'Total fruit consumption'
    //     }
    //   },
    //   legend: {
    //     reversed: true
    //   },
    //   series: [{
    //       name: 'Tanah, Gedung dan Bangunan',
    //       data: [5,3,4,3,4,6,7,4,2,6,7,8,9,4,4,5,7,2,9,4,7,3,8,1,4,9,9]
    //   }, {
    //       name: 'Kendaraan, Mesin dan Peralatan',
    //       data: [2,2,3,5,6,7,8,5,3,2,3,5,7,2,1,3,8,8,9,5,3,5,2,5,3,2,2]
    //   }, {
    //       name: 'Belanja Pegawai',
    //       data: [3, 4, 4]
    //   },{
    //       name: 'Belanja Operasional',
    //       data: [3, 4, 4]
    //   }]
    // };

    // this.gambar7 = {
    //   options: {
    //     chart: {
    //       plotBorderWidth: null,
    //       plotShadow: false,
    //       type: 'pie',
    //       options3d: {
    //         enabled: true,
    //         alpha: 45,
    //         beta: 0
    //       }
    //     },
    //     plotOptions: {
    //       pie: {
    //           allowPointSelect: true,
    //           cursor: 'pointer',
    //           depth: 35,
    //           dataLabels: {
    //               enabled: true,
    //               format: '{point.name}'
    //           }
    //       }
    //     }
    //   },
    //   title: {
    //     text: 'Total Belanja Litbang Sektor Pemerintah menurut Sumber Pendanaan'
    //   },
    //   tooltip: {
    //     pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    //   },
    //   series: [{
    //     name: 'Total Belanja',
    //     colorByPoint: true,
    //     data: [
    //     {
    //       name: 'DIPA Pemerintah',
    //       y: 77.59,
    //       sliced: true,
    //       selected: true
    //     }, {
    //       name: 'Instansi Pemerintah',
    //       sliced: true,
    //       y: 5.84
    //     },{
    //       name: 'Luar Negeri',
    //       sliced: true,
    //       y: 0.93
    //     },{
    //       name: 'Perusahaan Swasta',
    //       sliced: true,
    //       y: 0.56
    //     },{
    //       name: 'PNPB',
    //       sliced: true,
    //       y: 14.33
    //     },{
    //       name: 'Swasta Non Profit',
    //       sliced: true,
    //       y: 0.67
    //     },
    //     {
    //       name: 'Lainnya',
    //       sliced: true,
    //       y: 0.09
    //     }]
    //   }]
    // };

    // this.gambar8 = {
    //   options: {
    //     chart: {
    //       type: 'bar',
    //       stacking: 'normal'
    //     },
    //     plotOptions: {
    //       series: {
    //         stacking: 'normal'
    //       }
    //     },
    //   },
    //   title: {
    //     text: 'Komposisi Sumber Pendanaan Litbang'
    //   },
    //   xAxis: {
    //     categories: ['LPNK', 'LPK', 'Balitbanda/Bappeda']
    //   },
    //   yAxis: {
    //     min: 0,
    //     title: {
    //       text: 'Total fruit consumption'
    //     }
    //   },
    //   legend: {
    //     reversed: true
    //   },
    //   series: [{
    //       name: 'DIPA Pemerintah',
    //       data: [5, 3, 4]
    //   }, {
    //       name: 'Non-DIPA Instansi Pemerintah',
    //       data: [2, 2, 3]
    //   }, {
    //       name: 'Non-DIPA Luar Negeri',
    //       data: [3, 4, 4]
    //   },{
    //       name: 'Non-DIPA Swasta',
    //       data: [3, 4, 4]
    //   }, {
    //       name: 'DIPA PHLN',
    //       data: [3, 4, 4]
    //   }, {
    //       name: 'DIPA PNPB',
    //       data: [3, 4, 4]
    //   }]
    // };

    // this.gambar9 = {
    //   options: {
    //     chart: {
    //       plotBorderWidth: null,
    //       plotShadow: false,
    //       type: 'pie',
    //       options3d: {
    //         enabled: true,
    //         alpha: 45,
    //         beta: 0
    //       }
    //     },
    //     plotOptions: {
    //       pie: {
    //           allowPointSelect: true,
    //           cursor: 'pointer',
    //           depth: 35,
    //           dataLabels: {
    //               enabled: true,
    //               format: '{point.name}'
    //           }
    //       }
    //     }
    //   },
    //   title: {
    //     text: 'Total Belanja Litbang menurut Jenis Penelitian'
    //   },
    //   tooltip: {
    //     pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    //   },
    //   series: [{
    //     name: 'Total Belanja',
    //     colorByPoint: true,
    //     data: [
    //     {
    //       name: 'Penelitian Terapan',
    //       y: 63.75,
    //       sliced: true,
    //       selected: true
    //     }, {
    //       name: 'Pengembangan Experimental',
    //       y: 18.59
    //     },{
    //       name: 'Penelitian Dasar',
    //       y: 17.66
    //     }]
    //   }]
    // };

    // this.gambar10 = {
    //   options: {
    //     chart: {
    //       height: 600,
    //       type: 'bar'
    //     },
    //     plotOptions: {
    //       series: {
    //         stacking: 'normal'
    //       }
    //     },
    //   },
    //   title: {
    //     text: 'Distribusi Biaya Litbang menurut Jenis Penelitian per Lembaga Litbang'
    //   },
    //   xAxis: {
    //     categories: [
    //       'Kementrian Pertanian',
    //       'BPPT',
    //       'Kementrian Perindutrian',
    //       'LIPI',
    //       'Balitbangda',
    //       'Kementrian Kebudayaan Dan Pariwisata',
    //       'Kementrian Kehutanan',
    //       'BATAN',
    //       'Kementrian Pekerjaan Umum',
    //       'Kementrian Kelautan dan Perikanan',
    //       'Kementrian Kesehatan',
    //       'Bappeda',
    //       'Kementrian Komunikasi dan Informatika',
    //       'Kementrian Perhubungan',
    //       'Kementrian Pertahanan',
    //       'Kementrian ESDM',
    //       'Kementrian Agama',
    //       'Kementrian Sosial',
    //       'Kementrian Tenaga Kerja dan Transmigrasi',
    //       'Kementrian Hukum dan HAM',
    //       'Kementrian Koperasi dan UKM',
    //       'Kementrian Luar Negeri',
    //       'Kementrian Pendidikan Nasional',
    //       'Kementrian Perdagangan',
    //       'BSN',
    //       'Bakosurtanal',
    //       'LAPAN'
    //     ]
    //   },
    //   yAxis: {
    //     min: 0,
    //     title: {
    //       text: 'Total fruit consumption'
    //     }
    //   },
    //   legend: {
    //     reversed: true
    //   },
    //   series: [{
    //       name: 'Tanah, Gedung dan Bangunan',
    //       data: [5,3,4,3,4,6,7,4,2,6,7,8,9,4,4,5,7,2,9,4,7,3,8,1,4,9,9]
    //   }, {
    //       name: 'Kendaraan, Mesin dan Peralatan',
    //       data: [2,2,3,5,6,7,8,5,3,2,3,5,7,2,1,3,8,8,9,5,3,5,2,5,3,2,2]
    //   }, {
    //       name: 'Belanja Pegawai',
    //       data: [3, 4, 4]
    //   },{
    //       name: 'Belanja Operasional',
    //       data: [3, 4, 4]
    //   }]
    // };

    // this.gambar11 = {
    //   options: {
    //     chart: {
    //       plotBorderWidth: null,
    //       plotShadow: false,
    //       type: 'pie',
    //       options3d: {
    //         enabled: true,
    //         alpha: 45,
    //         beta: 0
    //       }
    //     },
    //     plotOptions: {
    //       pie: {
    //           allowPointSelect: true,
    //           cursor: 'pointer',
    //           depth: 35,
    //           dataLabels: {
    //               enabled: true,
    //               format: '{point.name}'
    //           }
    //       }
    //     }
    //   },
    //   title: {
    //     text: 'Total Belanja Litbang menurut Bidang Penelitian'
    //   },
    //   tooltip: {
    //     pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    //   },
    //   series: [{
    //     name: 'Total Belanja',
    //     colorByPoint: true,
    //     data: [
    //     {
    //       name: 'Enginering and Technology',
    //       y: 26.89,
    //       sliced: true,
    //       selected: true
    //     }, {
    //       name: 'Enviromental Sciences',
    //       sliced: true,
    //       y: 31.65
    //     },{
    //       name: 'Natural Sciences',
    //       sliced: true,
    //       y: 19.65
    //     }, {
    //       name: 'Medical Sciences',
    //       sliced: true,
    //       y: 5.77
    //     }, {
    //       name: 'Social Sciences',
    //       sliced: true,
    //       y: 13.55
    //     }, {
    //       name: 'Humanity',
    //       sliced: true,
    //       y: 2.49
    //     }]
    //   }]
    // };

    // this.gambar12 = {
    //   options: {
    //     chart: {
    //         type: 'column',
    //         // margin: 75,
    //         options3d: {
    //           enabled: true,
    //             alpha: 20,
    //             beta:30,
    //             depth: 260
    //         }
    //     },
    //     plotOptions: {
    //         column: {
    //             depth: 40,
    //             stacking: false,
    //             grouping: false,
    //             groupZPadding: 40
    //         }
    //     },
    //   },
    //   title: {
    //     text: 'Distribusi Belanja Litbang per Lembaga menurut Bidang Penelitian'
    //   },
    //   xAxis: {
    //     categories: [
    //       'Natural Sciences',
    //       'Medical Sciences',
    //       'Social Sciences',
    //       'Humanities',
    //       'Enginering',
    //       'Agricultural Sciences'
    //     ]
    //   },
    //   yAxis: {
    //     width:400
    //   },
    //   series: [{
    //     data: [1, 0, 0, 0, 0, 0],
    //   }, {
    //     data: [5, 6, 3, 4, 1, 0],
    //   }, {
    //     data: [7, 9, 8, 7, 5, 1]
    //   }]
    // };

    // this.gambar16 = {
    //   options: {
    //     chart: {
    //       type: 'bar'
    //     }
    //   },
    //   title: {
    //     text: 'Distribusi Biaya Litbang bidang Social Sciences'
    //   },
    //   xAxis: {
    //     categories: [
    //       'Education',
    //       'Commerce, Management, Tourism',
    //       'Economics',
    //       'Studies in Human Society',
    //       'Policy and Political Sciences',
    //       'Law, Justice and Law Enforcement',
    //       'Journalism, Librarianship',
    //       'Behavioural and Cognitive Sciences'
    //     ]
    //   },
    //   yAxis: {
    //     min: 0,
    //     title: {
    //       text: 'Total fruit consumption'
    //     }
    //   },
    //   legend: {
    //     reversed: true
    //   },
    //   series: [{
    //       data: [5,3,4,3,4,6,7]
    //   }]
    // };

    // this.gambar17 = {
    //   options: {
    //     chart: {
    //       plotBorderWidth: null,
    //       plotShadow: false,
    //       type: 'pie',
    //       options3d: {
    //         enabled: true,
    //         alpha: 45,
    //         beta: 0
    //       }
    //     },
    //     plotOptions: {
    //       pie: {
    //           allowPointSelect: true,
    //           cursor: 'pointer',
    //           depth: 35,
    //           dataLabels: {
    //               enabled: true,
    //               format: '{point.name}'
    //           }
    //       }
    //     }
    //   },
    //   title: {
    //     text: 'Belanja Litbang menurut Tujuan Sosio Ekonomi Litbang Sektor Pemerintah'
    //   },
    //   tooltip: {
    //     pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    //   },
    //   series: [{
    //     name: 'Total Belanja',
    //     colorByPoint: true,
    //     data: [
    //     {
    //       name: 'Economic Development',
    //       y: 62.31,
    //       sliced: true,
    //       selected: true
    //     }, {
    //       name: 'Society',
    //       sliced: true,
    //       y: 14.85
    //     },{
    //       name: 'Environment',
    //       sliced: true,
    //       y: 12.63
    //     }, {
    //       name: 'Advancement of Knowledge',
    //       sliced: true,
    //       y: 9.55
    //     }, {
    //       name: 'Defence',
    //       sliced: true,
    //       y: 0.66
    //     }]
    //   }]
    // };

    // this.gambar42 = {
    //   options: {
    //     chart: {
    //       plotBorderWidth: null,
    //       plotShadow: false,
    //       type: 'pie',
    //       options3d: {
    //         enabled: true,
    //         alpha: 45,
    //         beta: 0
    //       }
    //     },
    //     plotOptions: {
    //       pie: {
    //           allowPointSelect: true,
    //           cursor: 'pointer',
    //           depth: 35,
    //           dataLabels: {
    //               enabled: true,
    //               format: '{point.name}'
    //           }
    //       }
    //     }
    //   },
    //   title: {
    //     text: 'Belanja Litbang Ekstramural dan Intramural'
    //   },
    //   tooltip: {
    //     pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    //   },
    //   series: [{
    //     name: 'Total Belanja',
    //     colorByPoint: true,
    //     data: [
    //     {
    //       name: 'Intramural',
    //       y: 95.71,
    //       sliced: true,
    //       selected: true
    //     }, {
    //       name: 'Ekstramural',
    //       sliced: true,
    //       y: 4.29
    //     }]
    //   }]
    // };

    // this.gambar43 = {
    //   options: {
    //     chart: {
    //       plotBorderWidth: null,
    //       plotShadow: false,
    //       type: 'pie',
    //       options3d: {
    //         enabled: true,
    //         alpha: 45,
    //         beta: 0
    //       }
    //     },
    //     plotOptions: {
    //       pie: {
    //           allowPointSelect: true,
    //           cursor: 'pointer',
    //           depth: 35,
    //           dataLabels: {
    //               enabled: true,
    //               format: '{point.name}'
    //           }
    //       }
    //     }
    //   },
    //   title: {
    //     text: 'Belanja Litbang Ekstramural menurut Pelaksana'
    //   },
    //   tooltip: {
    //     pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    //   },
    //   series: [{
    //     name: 'Total Belanja',
    //     colorByPoint: true,
    //     data: [
    //     {
    //       name: 'Industri/Swasta',
    //       y: 60.66,
    //       sliced: true,
    //       selected: true
    //     }, {
    //       name: 'Lainnya',
    //       sliced: true,
    //       y: 19.45
    //     },{
    //       name: 'Perguuan Tinggi',
    //       sliced: true,
    //       y: 7.91
    //     }, {
    //       name: 'Litbang Pemerintah',
    //       sliced: true,
    //       y: 7.70
    //     }, {
    //       name: 'Konsultan',
    //       sliced: true,
    //       y: 4.29
    //     }]
    //   }]
    // };
  }
}

export default BelanjaController;
