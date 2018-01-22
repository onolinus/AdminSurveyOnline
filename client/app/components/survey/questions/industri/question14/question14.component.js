import template from './question14.html';
import controller from '../question.controller';
import './question14.styl';

let question1Component = {
  restrict: 'E',
  bindings: {answer: '=', year: '='},
  template,
  controller
};

export default question1Component;
