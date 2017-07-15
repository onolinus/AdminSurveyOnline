import template from './question15.html';
import controller from '../question.controller';
import './question15.styl';

let question15Component = {
  restrict: 'E',
  bindings: {answer:'=', checked:'=', year: '=', sub: '=', aliasNo: '='},
  template,
  controller
};

export default question15Component;
