import template from './question12.html';
import controller from '../question.controller';
import './question12.styl';

let question1Component = {
  restrict: 'E',
  bindings: {answer: '=', year: '='},
  template,
  controller
};

export default question1Component;
