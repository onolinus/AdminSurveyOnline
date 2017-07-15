import template from './question13.html';
import controller from '../question.controller';
import './question13.styl';

let question13Component = {
  restrict: 'E',
  bindings: {answer:'=', checked:'=', countries: '=', year: '='},
  template,
  controller
};

export default question13Component;
