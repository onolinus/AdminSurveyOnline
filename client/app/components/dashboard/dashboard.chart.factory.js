let ChartFactory = function ($http, $q, $cookies) {
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

  let labelFormatter =  (ob) => {
    var axis = ob.axis,
          value = ob.value,
          categories = axis.categories,
          dateTimeLabelFormat = ob.dateTimeLabelFormat,
          numericSymbols = ['Ribu', 'Juta', 'Miliar', 'Triliun', 'P', 'E'],
          i = numericSymbols && numericSymbols.length,
          multi,
          ret,
          formatOption = axis.options.labels.format,

          // make sure the same symbol is added for all labels on a linear axis
          numericSymbolDetector = axis.isLog ? value : axis.tickInterval;

      if (formatOption) {
          ret = format(formatOption, this);

      } else if (categories) {
          ret = value;

      } else if (dateTimeLabelFormat) { // datetime axis
          ret = dateFormat(dateTimeLabelFormat, value);

      } else if (i && numericSymbolDetector >= 1000) {
          // Decide whether we should add a numeric symbol like k (thousands) or M (millions).
          // If we are to enable this in tooltip or other places as well, we can move this
          // logic to the numberFormatter and enable it by a parameter.
          while (i-- && ret === undefined) {
              multi = Math.pow(1000, i + 1);
              if (numericSymbolDetector >= multi && (value * 10) % multi === 0 && numericSymbols[i] !== null && value !== 0) { // #5480
                  ret = Highcharts.numberFormat(value / multi, -1, '.', ',') + ' ' + numericSymbols[i];
              }
          }
      }

      if (ret === undefined) {
          if (Math.abs(value) >= 10000) { // add thousands separators
              ret = Highcharts.numberFormat(value, -1, '.', ',');

          } else { // small numbers
              ret = Highcharts.numberFormat(value, -1, '.', ','); // #2466
          }
      }

      return ret;
  }

  return { generateChartConfig, addAxisConf, addSeriesConf, labelFormatter};
};

export default ChartFactory;
