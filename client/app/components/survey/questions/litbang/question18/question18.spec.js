import Question18Module from './question18'
import Question18Controller from './question18.controller';
import Question18Component from './question18.component';
import Question18Template from './question18.html';

describe('Question18', () => {
  let $rootScope, makeController;

  beforeEach(window.module(Question18Module));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new Question18Controller();
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
      expect(Question18Template).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = Question18Component;

      it('includes the intended template',() => {
        expect(component.template).to.equal(Question18Template);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(Question18Controller);
      });
  });
});
