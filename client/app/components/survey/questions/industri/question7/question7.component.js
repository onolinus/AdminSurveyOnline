import template from './question7.html';
import controller from '../question.controller';
import './question7.styl';

let question1Component = {
  restrict: 'E',
  bindings: {answer: '=', year: '='},
  template,
  controller
};

export default question1Component;