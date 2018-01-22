import template from './question6.html';
import controller from '../question.controller';
import './question6.styl';

let question1Component = {
  restrict: 'E',
  bindings: {answer: '=', year: '='},
  template,
  controller
};

export default question1Component;
