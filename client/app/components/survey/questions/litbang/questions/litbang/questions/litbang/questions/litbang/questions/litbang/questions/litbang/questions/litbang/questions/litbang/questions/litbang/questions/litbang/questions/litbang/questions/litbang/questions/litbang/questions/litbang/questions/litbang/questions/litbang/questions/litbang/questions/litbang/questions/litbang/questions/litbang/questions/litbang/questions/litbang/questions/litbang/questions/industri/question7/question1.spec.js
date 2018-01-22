import Question1Module from './question1'
import Question1Controller from './question1.controller';
import Question1Component from './question1.component';
import Question1Template from './question1.html';

describe('Question1', () => {
  let $rootScope, makeController;

  beforeEach(window.module(Question1Module));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new Question1Controller();
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
      expect(Question1Template).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = Question1Component;

      it('includes the intended template',() => {
        expect(component.template).to.equal(Question1Template);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(Question1Controller);
      });
  });
});
