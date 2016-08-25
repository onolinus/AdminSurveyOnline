import template from './question1.html';
import controller from '../question.controller';
import './question1.styl';

let question1Component = {
  restrict: 'E',
  bindings: {answer: '='},
  template,
  controller
};

export default question1Component;
