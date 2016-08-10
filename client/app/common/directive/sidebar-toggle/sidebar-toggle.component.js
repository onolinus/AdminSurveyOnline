let sidebarToggleComponent = function(){

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
    restrict: 'A',
    link: function(){
      $('#sidebar-menu').find('a').on('click', function(ev) {
        var $li = $(this).parent();

        if ($li.is('.active')) {
            $li.removeClass('active active-sm');
            $('ul:first', $li).slideUp(function() {
                setContentHeight();
            });
        } else {
            // prevent closing menu if we are on child menu
            if (!$li.parent().is('.child_menu')) {
                $('#sidebar-menu').find('li').removeClass('active active-sm');
                $('#sidebar-menu').find('li ul').slideUp();
            }

            $li.addClass('active');

            $('ul:first', $li).slideDown(function() {
                setContentHeight();
            });
        }
    });
    }
  };
};

export default sidebarToggleComponent;
