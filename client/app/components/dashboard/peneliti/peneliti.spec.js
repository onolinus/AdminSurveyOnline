import PenelitiModule from './peneliti'
import PenelitiController from './peneliti.controller';
import PenelitiComponent from './peneliti.component';
import PenelitiTemplate from './peneliti.html';

describe('Peneliti', () => {
  let $rootScope, makeController;

  beforeEach(window.module(PenelitiModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new PenelitiController();
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
      expect(PenelitiTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = PenelitiComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(PenelitiTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(PenelitiController);
      });
  });
});
