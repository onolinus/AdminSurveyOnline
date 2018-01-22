import Question15Module from './question15'
import Question15Controller from './question15.controller';
import Question15Component from './question15.component';
import Question15Template from './question15.html';

describe('Question15', () => {
  let $rootScope, makeController;

  beforeEach(window.module(Question15Module));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new Question15Controller();
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
      expect(Question15Template).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = Question15Component;

      it('includes the intended template',() => {
        expect(component.template).to.equal(Question15Template);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(Question15Controller);
      });
  });
});
