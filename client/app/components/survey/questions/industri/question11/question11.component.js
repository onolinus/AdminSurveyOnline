import template from './question11.html';
import controller from '../question.controller';
import './question11.styl';

let question1Component = {
  restrict: 'E',
  bindings: {answer: '=', year: '=', fokus: '='},
  template,
  controller
};

export default question1Component;
