import template from './belanja.html';
import controller from './belanja.controller';
import './belanja.styl';

let belanjaComponent = {
  restrict: 'E',
  bindings: {graph4: '=', graph5: '=', graph6: '=', graph7a: '=', graph7b: '=', graph9: '='},
  template,
  controller
};

export default belanjaComponent;
