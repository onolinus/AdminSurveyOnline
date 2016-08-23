class AnggaranController {
  constructor() {
    this.chartConfig = {
      options: {
        chart: {
          height: 500,
          type: 'bar'
        }
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
        ],
        title: {
            text: null
        }
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Milyar Rupiah',
          align: 'high'
        },
        labels: {
          overflow: 'justify'
        }
      },
      series: [{
        name: 'Jumlah Anggaran',
        data: [58, 29, 22, 17, 15, 13 ,13 ,11, 9, 9, 8, 8, 7, 5, 4, 4, 3, 3, 2, 2, 2, 1, 1, 1, 1, 1, 1]
      }],
      title: {
        text: 'Total Anggaran Litbang Sektor Pemerintah'
      },
      loading: false
    };
  }
}

export default AnggaranController;
