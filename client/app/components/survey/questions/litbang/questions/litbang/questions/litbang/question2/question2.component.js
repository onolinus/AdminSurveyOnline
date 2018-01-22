import template from './question2.html';
import controller from '../question.controller';
import './question2.styl';

let question2Component = {
  restrict: 'E',
  bindings: {answer:'=', year: '='},
  template,
  controller
};

export default question2Component;
