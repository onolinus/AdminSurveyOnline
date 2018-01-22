import Question9Module from './question9'
import Question9Controller from './question9.controller';
import Question9Component from './question9.component';
import Question9Template from './question9.html';

describe('Question9', () => {
  let $rootScope, makeController;

  beforeEach(window.module(Question9Module));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new Question9Controller();
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
      expect(Question9Template).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = Question9Component;

      it('includes the intended template',() => {
        expect(component.template).to.equal(Question9Template);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(Question9Controller);
      });
  });
});
