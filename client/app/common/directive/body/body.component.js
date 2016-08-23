import setContentHeight from './../setContentHeight.helper';

let body = function($timeout, $rootScope){
  var CURRENT_URL = window.location.href.split('?')[0];

  return {
    restrict: 'E',
    link: function(){

      $timeout(function(){

        // recompute content when resizing
        /*$(window).smartresize(function(){
            setContentHeight();
        });*/

        setContentHeight();

        // fixed sidebar
        if ($.fn.mCustomScrollbar) {
          $('.menu_fixed').mCustomScrollbar({
            autoHideScrollbar: true,
            theme: 'minimal',
            mouseWheel:{ preventDefault: true }
          });
        }

      }, 0);


      $rootScope.$on('$stateChangeSuccess',  function(event, toState, toStateParams){
        $timeout(function(){
          setContentHeight();
        }, 0);
      });

    }
  };
};

export default body;
