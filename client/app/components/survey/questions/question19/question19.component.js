import template from './question19.html';
import controller from '../question.controller';
import './question19.styl';

let question19Component = {
  restrict: 'E',
  bindings: {answer:'=', year: '=', aliasNo: '='},
  template,
  controller
};

export default question19Component;
