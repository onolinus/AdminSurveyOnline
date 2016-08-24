class ChartService {
  constructor($http, $timeout, User, apiURL, chartFactory) {
    "ngInject";

    this.$http = $http;
    this.User = User;
    this.apiURL = apiURL;
    this.chartFactory = chartFactory;
    this.$timeout = $timeout;
  }

  getChart1 = () => {
    let config = this.chartFactory.generateChartConfig('bar', 'Sebaran Responden menurut Lembaga');

    angular.extend(config, {loading: true});

    const respondenCountReq = {
      method: 'GET',
      url: this.apiURL + '/stats/lembaga/countuser',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Authorization': 'Bearer' + ' ' + this.User.getAuth().access_token
      },
    };

    let categories = [], data = [];

    this.$http(respondenCountReq)
      .then((response) => {
        angular.forEach(response.data.data, (lembaga, index) => {
          categories.push(lembaga.name);
          data.push(lembaga.count);
        });
      })
      .finally(() => {
        angular.extend(config, {
          xAxis: {
            categories: categories,
            title: {
              text: null
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
            name: 'Responden',
            data: data
          }]}
        );

        angular.extend(config, {loading: false});

        console.log('config', config);
      });

    return config;
  }
}

export default ChartService;
