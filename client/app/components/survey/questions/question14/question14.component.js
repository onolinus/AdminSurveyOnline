import template from './question14.html';
import controller from '../question.controller';
import './question14.styl';

let question14Component = {
  restrict: 'E',
  bindings: {answer:'=', checked:'='},
  template,
  controller
};

export default question14Component;
