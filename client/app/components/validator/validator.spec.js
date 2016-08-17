import ValidatorModule from './validator'
import ValidatorController from './validator.controller';
import ValidatorComponent from './validator.component';
import ValidatorTemplate from './validator.html';

describe('Validator', () => {
  let $rootScope, makeController;

  beforeEach(window.module(ValidatorModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new ValidatorController();
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
      expect(ValidatorTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = ValidatorComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(ValidatorTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(ValidatorController);
      });
  });
});
