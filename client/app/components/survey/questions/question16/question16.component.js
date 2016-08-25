import template from './question16.html';
import controller from '../question.controller';
import './question16.styl';

let question16Component = {
  restrict: 'E',
  bindings: {answer:'=', checked:'='},
  template,
  controller
};

export default question16Component;
