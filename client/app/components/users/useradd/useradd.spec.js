import ValidatoraddModule from './validatoradd'
import ValidatoraddController from './validatoradd.controller';
import ValidatoraddComponent from './validatoradd.component';
import ValidatoraddTemplate from './validatoradd.html';

describe('Validatoradd', () => {
  let $rootScope, makeController;

  beforeEach(window.module(ValidatoraddModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new ValidatoraddController();
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
      expect(ValidatoraddTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = ValidatoraddComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(ValidatoraddTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(ValidatoraddController);
      });
  });
});
