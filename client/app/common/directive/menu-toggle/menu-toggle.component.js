import setContentHeight from './../setContentHeight.helper';

let menuToggleComponent = function($timeout){
  return {
    restrict: 'A',
    link: function(scope, elem){
      elem.bind('click', function() {
        if ($('body').hasClass('nav-md')) {
          $('#sidebar-menu').find('li.active ul').hide();
          $('#sidebar-menu').find('li.active').addClass('active-sm').removeClass('active');
        } else {
          $('#sidebar-menu').find('li.active-sm ul').show();
          $('#sidebar-menu').find('li.active-sm').addClass('active').removeClass('active-sm');
        }

        $('body').toggleClass('nav-md nav-sm');

        setContentHeight();
      });
    }
  };
};

export default menuToggleComponent;
