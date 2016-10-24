import template from './anggaran.html';
import controller from './anggaran.controller';
import './anggaran.styl';

let anggaranComponent = {
  restrict: 'E',
  bindings: {graph2: '='},
  template,
  controller
};

export default anggaranComponent;
