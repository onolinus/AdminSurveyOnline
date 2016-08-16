let body = function($timeout, $rootScope){
  var CURRENT_URL = window.location.href.split('?')[0];

  var setContentHeight = function () {
    // reset height
    $('.right_col').css('min-height', $(window).height());

    var bodyHeight = $('body').outerHeight(),
        footerHeight =  $('body').hasClass('footer_fixed') ? 0 : $('footer').height(),
        leftColHeight = $('.left_col').eq(1).height() + $('.sidebar-footer').height(),
        contentHeight = bodyHeight < leftColHeight ? leftColHeight : bodyHeight;

    // normalize content
    contentHeight -= $('.nav_menu').height() + footerHeight;

    $('.right_col').css('min-height', contentHeight);
  };

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

      }, 500);


      $rootScope.$on('$stateChangeSuccess',  function(event, toState, toStateParams){
        $timeout(function(){
          setContentHeight();
        }, 500);

      });

    }
  };
};

export default body;
