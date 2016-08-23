import BelanjaModule from './belanja'
import BelanjaController from './belanja.controller';
import BelanjaComponent from './belanja.component';
import BelanjaTemplate from './belanja.html';

describe('Belanja', () => {
  let $rootScope, makeController;

  beforeEach(window.module(BelanjaModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new BelanjaController();
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
      expect(BelanjaTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = BelanjaComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(BelanjaTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(BelanjaController);
      });
  });
});
