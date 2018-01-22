class QuestionController {
  constructor($scope, questionService, $state, $stateParams) {
    "ngInject";

    this.questionService = questionService;
    this.$state = $state;
    this.surveyId = $stateParams.survey_id;

    this.statusUpdated = false;
    this.questionService.updateAnswersStatus(this.surveyId);
    console.log(this)
  }

  reject = (subQuestion=false) => {
    const questionNo = this.aliasNo || this.$state.$current.no;
    this.questionService.rejectAnswer(this.surveyId, questionNo, subQuestion)
      .then(() => {
        this.statusUpdated = true;
      });
  }

  approve = (subQuestion=false) => {
    const questionNo = this.aliasNo || this.$state.$current.no;

    this.questionService.approveAnswer(this.surveyId, questionNo, subQuestion)
      .then(()=> {
        this.statusUpdated = true;
        this.questionService.updateAnswersStatus(this.surveyId);
      });
  }
}

export default QuestionController;
