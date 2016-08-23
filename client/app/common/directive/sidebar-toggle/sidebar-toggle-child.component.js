import setContentHeight from './../setContentHeight.helper';

let sidebarToggleChildComponent = function($timeout){
  return {
    restrict: 'A',
    link: function(scope, elem){
      scope.$watch(function(){
        return $(elem).hasClass('current-page')
      }, function(active){
        if (active && !($('body').hasClass('nav-sm'))) {
          $(elem).parent('ul').slideDown(function() {
            setContentHeight();
          });
        }
      });
    }
  };
};

export default sidebarToggleChildComponent;
