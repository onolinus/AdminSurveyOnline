import template from './question5.html';
import controller from '../question.controller';
import './question5.styl';

let question5Component = {
  restrict: 'E',
  bindings: {answer:'=', researchFields:'='},
  template,
  controller
};

export default question5Component;
