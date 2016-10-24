import template from './paten.html';
import controller from './paten.controller';
import './paten.styl';

let patenComponent = {
  restrict: 'E',
  bindings: {
    graph67: '=',
    graph68: '=',
    graph70: '=',
    graph71: '=',
    graph77: '='
  },
  template,
  controller
};

export default patenComponent;
