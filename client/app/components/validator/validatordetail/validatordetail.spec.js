import ValidatordetailModule from './validatordetail'
import ValidatordetailController from './validatordetail.controller';
import ValidatordetailComponent from './validatordetail.component';
import ValidatordetailTemplate from './validatordetail.html';

describe('Validatordetail', () => {
  let $rootScope, makeController;

  beforeEach(window.module(ValidatordetailModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new ValidatordetailController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(ValidatordetailTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = ValidatordetailComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(ValidatordetailTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(ValidatordetailController);
      });
  });
});
