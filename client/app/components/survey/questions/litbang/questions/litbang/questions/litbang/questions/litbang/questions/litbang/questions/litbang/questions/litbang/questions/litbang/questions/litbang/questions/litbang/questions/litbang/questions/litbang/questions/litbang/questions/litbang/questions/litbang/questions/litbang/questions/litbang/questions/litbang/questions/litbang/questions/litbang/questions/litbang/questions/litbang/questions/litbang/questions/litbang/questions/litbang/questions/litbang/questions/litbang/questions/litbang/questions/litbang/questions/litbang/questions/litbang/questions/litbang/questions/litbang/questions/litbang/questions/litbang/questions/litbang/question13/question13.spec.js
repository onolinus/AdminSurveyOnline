import Question13Module from './question13'
import Question13Controller from './question13.controller';
import Question13Component from './question13.component';
import Question13Template from './question13.html';

describe('Question13', () => {
  let $rootScope, makeController;

  beforeEach(window.module(Question13Module));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new Question13Controller();
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
      expect(Question13Template).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = Question13Component;

      it('includes the intended template',() => {
        expect(component.template).to.equal(Question13Template);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(Question13Controller);
      });
  });
});
