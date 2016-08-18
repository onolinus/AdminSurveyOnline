import setContentHeight from './../setContentHeight.helper';

let body = function($timeout, $rootScope){
  var CURRENT_URL = window.location.href.split('?')[0];

  return {
    restrict: 'E',
    link: function(){

      $timeout(function(){

        $('#sidebar-menu').find('a[href="' + CURRENT_URL + '"]').parent('li').addClass('current-page');

        $('#sidebar-menu').find('a').filter(function () {
            return this.href == CURRENT_URL;
        }).parent('li').addClass('current-page').parents('ul').slideDown(function() {
            setContentHeight();
        }).parent().addClass('active');

        // recompute content when resizing
        // $(window).smartresize(function(){
        //     setContentHeight();
        // });

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
