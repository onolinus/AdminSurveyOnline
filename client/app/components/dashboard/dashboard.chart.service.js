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
          data.push(lembaga.count);
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
          submittedRespondenData.push(lembaga.count);
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
}

export default ChartService;
