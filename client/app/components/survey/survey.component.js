import template from './survey.html';
import controller from './survey.controller';
import './survey.styl';

let surveyComponent = {
  restrict: 'E',
  bindings : {correspondentDetail: "=", userId: '='},
  template,
  controller
};

export default surveyComponent;
