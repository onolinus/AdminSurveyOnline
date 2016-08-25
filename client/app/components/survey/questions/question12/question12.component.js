import template from './question12.html';
import controller from '../question.controller';
import './question12.styl';

let question12Component = {
  restrict: 'E',
  bindings: {answer:'=', checked:'=', researchFields:'='},
  template,
  controller
};

export default question12Component;
