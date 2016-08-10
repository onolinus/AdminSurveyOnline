import template from './menu.html';
import controller from './menu.controller';
import './menu.styl';

let menuComponent = {
  restrict: 'E',
  bindings: {},
  replace: true,
  template,
  controller
};

export default menuComponent;
