import template from './question7.html';
import controller from '../question.controller';
import './question7.styl';

let question7Component = {
  restrict: 'E',
  bindings: {answer:'='},
  template,
  controller
};

export default question7Component;
