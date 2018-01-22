import Question19Module from './question19'
import Question19Controller from './question19.controller';
import Question19Component from './question19.component';
import Question19Template from './question19.html';

describe('Question19', () => {
  let $rootScope, makeController;

  beforeEach(window.module(Question19Module));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new Question19Controller();
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
      expect(Question19Template).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = Question19Component;

      it('includes the intended template',() => {
        expect(component.template).to.equal(Question19Template);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(Question19Controller);
      });
  });
});
