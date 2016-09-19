import RespondenModule from './responden'
import RespondenController from './responden.controller';
import RespondenComponent from './responden.component';
import RespondenTemplate from './responden.html';

describe('Responden', () => {
  let $rootScope, makeController;

  beforeEach(window.module(RespondenModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new RespondenController();
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
      expect(RespondenTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = RespondenComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(RespondenTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(RespondenController);
      });
  });
});
