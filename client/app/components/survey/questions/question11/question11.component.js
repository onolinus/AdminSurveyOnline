import template from './question11.html';
import controller from '../question.controller';
import './question11.styl';

let question11Component = {
  restrict: 'E',
  bindings: {answer:'=', checked:'=', researchFields:'='},
  template,
  controller
};

export default question11Component;
