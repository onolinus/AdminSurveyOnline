let highchartCustom = function($timeout, $window){
  'ngInject';

  return {
    restrict: 'E',
    replace: true,
    template: '<div></div>',
    link: function(scope, elem, attr){
      $timeout(function(){

        // recompute content when resizing
        // $(window).smartresize(function(){
        //   // setContentHeight();
        // });

        let chart = Highcharts.chart(elem[0] , scope.$eval(attr.config));
      }, 0);

    }
  };
};

export default highchartCustom;
