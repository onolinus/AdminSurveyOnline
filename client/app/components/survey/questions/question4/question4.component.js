import template from './question4.html';
import controller from '../question.controller';
import './question4.styl';

let question4Component = {
  restrict: 'E',
  bindings: {answer:'='},
  template,
  controller
};

export default question4Component;
