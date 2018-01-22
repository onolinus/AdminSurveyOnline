import template from './question3.html';
import controller from '../question.controller';
import './question3.styl';

let question1Component = {
  restrict: 'E',
  bindings: {answer: '=', year: '=', institusiNasional: '=', institusiInternasional: '='},
  template,
  controller
};

export default question1Component;
