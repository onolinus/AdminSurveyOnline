import setContentHeight from './../setContentHeight.helper';

let sidebarToggleComponent = function($timeout){
  return {
    restrict: 'A',
    link: function(scope, elem){
      $timeout(function(){
        $(elem).find('a').on('click', function(ev) {
          if ($(elem).is('.active')) {
            $(elem).removeClass('active active-sm');
            $('ul:first', $(elem)).slideUp(function() {
              setContentHeight();
            });
          } else {
            $(elem).addClass('active');

            $('ul:first', $(elem)).slideDown(function() {
              setContentHeight();
            });
          }
        });
      }, 0);
    }
  };
};

export default sidebarToggleComponent;
