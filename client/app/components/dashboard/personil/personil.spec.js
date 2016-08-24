import PersonilModule from './personil'
import PersonilController from './personil.controller';
import PersonilComponent from './personil.component';
import PersonilTemplate from './personil.html';

describe('Personil', () => {
  let $rootScope, makeController;

  beforeEach(window.module(PersonilModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new PersonilController();
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
      expect(PersonilTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = PersonilComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(PersonilTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(PersonilController);
      });
  });
});
