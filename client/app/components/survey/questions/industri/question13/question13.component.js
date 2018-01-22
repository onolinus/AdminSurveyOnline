import template from './question13.html';
import controller from '../question.controller';
import './question13.styl';

let question1Component = {
  restrict: 'E',
  bindings: {answer: '=', year: '='},
  template,
  controller
};

export default question1Component;
