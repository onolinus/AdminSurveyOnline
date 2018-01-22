import template from './responden.html';
import controller from './responden.controller';
import './responden.styl';

let respondenComponent = {
  restrict: 'E',
  bindings: {litbang: '=', industri: '=', smiLocal: '='},
  template,
  controller
};

export default respondenComponent;
