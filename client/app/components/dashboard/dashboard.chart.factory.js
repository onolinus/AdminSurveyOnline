let ChartFactory = function ($http, $q, $cookies, apiURL) {
  const defaultLegendConf = {
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'top',
    x: -10,
    y: 100,
    borderWidth: 0
  };

  const defaultOptions = {
    'bar': {
      options: {
        chart: {
          height: 500,
          type: 'bar'
        },
      }
    },
    'column': {
      options: angular.extend({
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
        }
      }, {legend: defaultLegendConf})
    },
    'pie': {},
    '3dPie': {}
  };

  let generateChartConfig = (type, title=false) => {
    let config = defaultOptions[type];

    if (title) {
      angular.extend(config, {title: {
        text: title
      }});
    }

    return angular.copy(config);
  }

  let addAxisConf = (config, axisType='x', data=[]) => {
    return config
  }

  let addSeriesConf = (config, data=[]) => {
    return config
  }

  return { generateChartConfig, addAxisConf, addSeriesConf};
};

export default ChartFactory;
