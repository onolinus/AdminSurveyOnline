import Question3Module from './question3'
import Question3Controller from './question3.controller';
import Question3Component from './question3.component';
import Question3Template from './question3.html';

describe('Question3', () => {
  let $rootScope, makeController;

  beforeEach(window.module(Question3Module));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new Question3Controller();
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
      expect(Question3Template).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = Question3Component;

      it('includes the intended template',() => {
        expect(component.template).to.equal(Question3Template);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(Question3Controller);
      });
  });
});
