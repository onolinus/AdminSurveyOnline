import Question11Module from './question11'
import Question11Controller from './question11.controller';
import Question11Component from './question11.component';
import Question11Template from './question11.html';

describe('Question11', () => {
  let $rootScope, makeController;

  beforeEach(window.module(Question11Module));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new Question11Controller();
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
      expect(Question11Template).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = Question11Component;

      it('includes the intended template',() => {
        expect(component.template).to.equal(Question11Template);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(Question11Controller);
      });
  });
});
