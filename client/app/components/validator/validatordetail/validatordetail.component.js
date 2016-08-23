import template from './validatordetail.html';
import controller from './validatordetail.controller';
import './validatordetail.styl';

let validatordetailComponent = {
  restrict: 'E',
  bindings: {userDetail:'='},
  template,
  controller
};

export default validatordetailComponent;
