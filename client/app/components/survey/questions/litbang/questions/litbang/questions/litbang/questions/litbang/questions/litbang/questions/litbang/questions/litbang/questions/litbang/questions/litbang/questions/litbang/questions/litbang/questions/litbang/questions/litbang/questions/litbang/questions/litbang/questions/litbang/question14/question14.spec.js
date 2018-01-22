import Question14Module from './question14'
import Question14Controller from './question14.controller';
import Question14Component from './question14.component';
import Question14Template from './question14.html';

describe('Question14', () => {
  let $rootScope, makeController;

  beforeEach(window.module(Question14Module));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new Question14Controller();
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
      expect(Question14Template).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = Question14Component;

      it('includes the intended template',() => {
        expect(component.template).to.equal(Question14Template);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(Question14Controller);
      });
  });
});
