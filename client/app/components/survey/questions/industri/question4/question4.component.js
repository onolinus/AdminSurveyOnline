import template from './question4.html';
import controller from '../question.controller';
import './question4.styl';

let question1Component = {
  restrict: 'E',
  bindings: {answer: '=', year: '=', unit: '='},
  template,
  controller
};

export default question1Component;
