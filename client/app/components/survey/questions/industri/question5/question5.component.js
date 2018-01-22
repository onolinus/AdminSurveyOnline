import template from './question5.html';
import controller from '../question.controller';
import './question5.styl';

let question1Component = {
  restrict: 'E',
  bindings: {answer: '=', year: '='},
  template,
  controller
};

export default question1Component;
