import Question12Module from './question12'
import Question12Controller from './question12.controller';
import Question12Component from './question12.component';
import Question12Template from './question12.html';

describe('Question12', () => {
  let $rootScope, makeController;

  beforeEach(window.module(Question12Module));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new Question12Controller();
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
      expect(Question12Template).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = Question12Component;

      it('includes the intended template',() => {
        expect(component.template).to.equal(Question12Template);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(Question12Controller);
      });
  });
});
