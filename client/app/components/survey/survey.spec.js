import SurveyModule from './survey'
import SurveyController from './survey.controller';
import SurveyComponent from './survey.component';
import SurveyTemplate from './survey.html';

describe('Survey', () => {
  let $rootScope, makeController;

  beforeEach(window.module(SurveyModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new SurveyController();
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
      expect(SurveyTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = SurveyComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(SurveyTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(SurveyController);
      });
  });
});
