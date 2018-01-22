import Question10Module from './question10'
import Question10Controller from './question10.controller';
import Question10Component from './question10.component';
import Question10Template from './question10.html';

describe('Question10', () => {
  let $rootScope, makeController;

  beforeEach(window.module(Question10Module));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new Question10Controller();
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
      expect(Question10Template).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = Question10Component;

      it('includes the intended template',() => {
        expect(component.template).to.equal(Question10Template);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(Question10Controller);
      });
  });
});
