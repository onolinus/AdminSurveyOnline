import Question8Module from './question8'
import Question8Controller from './question8.controller';
import Question8Component from './question8.component';
import Question8Template from './question8.html';

describe('Question8', () => {
  let $rootScope, makeController;

  beforeEach(window.module(Question8Module));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new Question8Controller();
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
      expect(Question8Template).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = Question8Component;

      it('includes the intended template',() => {
        expect(component.template).to.equal(Question8Template);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(Question8Controller);
      });
  });
});
