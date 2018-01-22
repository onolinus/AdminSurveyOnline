import template from './question3.html';
import controller from '../question.controller';
import './question3.styl';

let question3Component = {
  restrict: 'E',
  bindings: {answer:'=', year: '=', industri: '='},
  template,
  controller
};

export default question3Component;
