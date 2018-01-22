import template from './question6.html';
import controller from '../question.controller';
import './question6.styl';

let question6Component = {
  restrict: 'E',
  bindings: {answer:'=', researchFields:'=', year: '='},
  template,
  controller
};

export default question6Component;
