import template from './question10.html';
import controller from '../question.controller';
import './question10.styl';

let question10Component = {
  restrict: 'E',
  bindings: {answer:'=', checked:'=', institusi: '=', year: '='},
  template,
  controller
};

export default question10Component;
