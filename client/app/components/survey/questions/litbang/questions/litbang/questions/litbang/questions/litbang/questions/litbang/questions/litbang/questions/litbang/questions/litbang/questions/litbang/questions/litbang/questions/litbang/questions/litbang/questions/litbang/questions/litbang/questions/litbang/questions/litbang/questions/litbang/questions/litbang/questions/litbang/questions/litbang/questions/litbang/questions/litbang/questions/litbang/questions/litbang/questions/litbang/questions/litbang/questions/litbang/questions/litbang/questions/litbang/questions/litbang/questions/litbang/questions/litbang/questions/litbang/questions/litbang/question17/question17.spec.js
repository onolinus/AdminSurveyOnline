import Question17Module from './question17'
import Question17Controller from './question17.controller';
import Question17Component from './question17.component';
import Question17Template from './question17.html';

describe('Question17', () => {
  let $rootScope, makeController;

  beforeEach(window.module(Question17Module));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new Question17Controller();
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
      expect(Question17Template).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = Question17Component;

      it('includes the intended template',() => {
        expect(component.template).to.equal(Question17Template);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(Question17Controller);
      });
  });
});
