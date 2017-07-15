import template from './question9.html';
import controller from '../question.controller';
import './question9.styl';

let question9Component = {
  restrict: 'E',
  bindings: {answer:'=', klasifikasi:'=', year: '='},
  template,
  controller
};

export default question9Component;
