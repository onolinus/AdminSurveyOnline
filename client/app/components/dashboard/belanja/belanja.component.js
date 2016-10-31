import template from './belanja.html';
import controller from './belanja.controller';
import './belanja.styl';

let belanjaComponent = {
  restrict: 'E',
  bindings: {graph4: '=', graph5: '=', graph6: '=', graph7a: '=', graph7b: '=', graph9: '=', graph11: '=', graph17: '=',  graph42: '=', graph43: '=', compareAnggaranDipa: '='},
  template,
  controller
};

export default belanjaComponent;
