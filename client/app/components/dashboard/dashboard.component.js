import template from './dashboard.html';
import controller from './dashboard.controller';
import './dashboard.styl';

let dashboardComponent = {
  restrict: 'E',
  bindings: {summaryStats:'=', sebaranResponden:'=', submittedResponden:'='},
  template,
  controller
};

export default dashboardComponent;
