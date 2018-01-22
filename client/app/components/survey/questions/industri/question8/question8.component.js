import template from './question8.html';
import controller from '../question.controller';
import './question8.styl';

let question1Component = {
  restrict: 'E',
  bindings: {answer: '=', year: '=', output: '='},
  template,
  controller
};

export default question1Component;
