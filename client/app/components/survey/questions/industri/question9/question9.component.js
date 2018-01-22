import template from './question9.html';
import controller from '../question.controller';
import './question9.styl';

let question1Component = {
  restrict: 'E',
  bindings: {answer: '=', year: '=', institusiNasional: '=', institusiInternasional: '='},
  template,
  controller
};

export default question1Component;
