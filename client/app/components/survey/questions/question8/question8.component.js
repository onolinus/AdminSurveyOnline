import template from './question8.html';
import controller from '../question.controller';
import './question8.styl';

let question8Component = {
  restrict: 'E',
  bindings: {answer:'=', checked:'=', institusi: '=', year: '='},
  template,
  controller
};

export default question8Component;
