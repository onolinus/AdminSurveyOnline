import template from './home.html';
import controller from './home.controller';
import './home.styl';

let homeComponent = {
  restrict: 'E',
  bindings: { respondenRegistered: '='},
  template,
  controller
};

export default homeComponent;
