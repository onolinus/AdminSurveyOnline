import Question16Module from './question16'
import Question16Controller from './question16.controller';
import Question16Component from './question16.component';
import Question16Template from './question16.html';

describe('Question16', () => {
  let $rootScope, makeController;

  beforeEach(window.module(Question16Module));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new Question16Controller();
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
      expect(Question16Template).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = Question16Component;

      it('includes the intended template',() => {
        expect(component.template).to.equal(Question16Template);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(Question16Controller);
      });
  });
});
