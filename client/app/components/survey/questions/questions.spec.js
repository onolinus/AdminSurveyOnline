import QuestionsModule from './questions'
import QuestionsController from './questions.controller';
import QuestionsComponent from './questions.component';
import QuestionsTemplate from './questions.html';

describe('Questions', () => {
  let $rootScope, makeController;

  beforeEach(window.module(QuestionsModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new QuestionsController();
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
      expect(QuestionsTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = QuestionsComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(QuestionsTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(QuestionsController);
      });
  });
});
