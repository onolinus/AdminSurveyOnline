import template from './question17.html';
import controller from '../question.controller';
import './question17.styl';

let question17Component = {
  restrict: 'E',
  bindings: {answer:'=', checked:'='},
  template,
  controller
};

export default question17Component;
