import AnggaranModule from './anggaran'
import AnggaranController from './anggaran.controller';
import AnggaranComponent from './anggaran.component';
import AnggaranTemplate from './anggaran.html';

describe('Anggaran', () => {
  let $rootScope, makeController;

  beforeEach(window.module(AnggaranModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new AnggaranController();
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
      expect(AnggaranTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = AnggaranComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(AnggaranTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(AnggaranController);
      });
  });
});
