import Question7Module from './question7'
import Question7Controller from './question7.controller';
import Question7Component from './question7.component';
import Question7Template from './question7.html';

describe('Question7', () => {
  let $rootScope, makeController;

  beforeEach(window.module(Question7Module));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new Question7Controller();
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
      expect(Question7Template).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = Question7Component;

      it('includes the intended template',() => {
        expect(component.template).to.equal(Question7Template);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(Question7Controller);
      });
  });
});
