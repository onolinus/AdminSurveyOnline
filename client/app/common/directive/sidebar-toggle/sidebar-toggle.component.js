import setContentHeight from './../setContentHeight.helper';

let sidebarToggleComponent = function(){
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
