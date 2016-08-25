import template from './question18.html';
import controller from '../question.controller';
import './question18.styl';

let question18Component = {
  restrict: 'E',
  bindings: {answer:'='},
  template,
  controller
};

export default question18Component;
