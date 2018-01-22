import Question5Module from './question5'
import Question5Controller from './question5.controller';
import Question5Component from './question5.component';
import Question5Template from './question5.html';

describe('Question5', () => {
  let $rootScope, makeController;

  beforeEach(window.module(Question5Module));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new Question5Controller();
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
      expect(Question5Template).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = Question5Component;

      it('includes the intended template',() => {
        expect(component.template).to.equal(Question5Template);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(Question5Controller);
      });
  });
});
