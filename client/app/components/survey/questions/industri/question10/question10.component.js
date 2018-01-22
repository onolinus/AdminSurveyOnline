import template from './question10.html';
import controller from '../question.controller';
import './question10.styl';

let question1Component = {
  restrict: 'E',
  bindings: {answer: '=', year: '='},
  template,
  controller
};

export default question1Component;
