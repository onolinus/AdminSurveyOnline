import template from './survey.html';
import controller from './survey.controller';
import './survey.styl';

let surveyComponent = {
  restrict: 'E',
  bindings : {survey: "=", answers: '=', surveyId: "="},
  template,
  controller
};

export default surveyComponent;
