import Question2Module from './question2'
import Question2Controller from './question2.controller';
import Question2Component from './question2.component';
import Question2Template from './question2.html';

describe('Question2', () => {
  let $rootScope, makeController;

  beforeEach(window.module(Question2Module));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new Question2Controller();
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
      expect(Question2Template).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = Question2Component;

      it('includes the intended template',() => {
        expect(component.template).to.equal(Question2Template);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(Question2Controller);
      });
  });
});
