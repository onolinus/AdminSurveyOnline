class SurveyController {
  constructor($state, $stateParams, $rootScope, questionFactory) {
    "ngInject";
    this.activeIndex = 0;
    this.$state = $state;
    this.$stateParams = $stateParams;
    this.questionFactory = questionFactory;

    $rootScope.$on('$stateChangeSuccess', (event, toState, toStateParam, fromState) => {
      if (toState.no) {
        this.activeIndex = toState.no;
      } else {
        if (this.activeIndex == 0) {
            this.activeIndex = 1;
            this.$state.go('question' + this.activeIndex);
        }
      }
    });

    this.answerCheckList = this.setAnswerListType()
  };

  setAnswerListType = () => {
    const keys = Object.keys(this.answers).map((item) => {
      return item.match(/\d/g).join('');
    });

    let keysType = [];
    angular.forEach(keys, function(item, pos) {
      if(keys.indexOf(item) == pos){
        keysType[item -1] = {number: item, subquestion: false}
      } else {
        keysType[item -1] = {number: item, subquestion: true}
      }
    });

    return keysType;
  }

  next = () => {
    if (this.activeIndex < 18) {
      this.activeIndex += 1;
    } else {
      this.activeIndex = 1;
    }

    this.$state.go('question' + this.activeIndex);
  };

  prev = () => {
    if (this.activeIndex > 1) {
      this.activeIndex -= 1;
    } else {
      this.activeIndex = 18;
    }

    this.$state.go('question' + this.activeIndex);
  };

  getStatus = (questionId, subQuestion) => {
    if (this.$stateParams.year == '2017') {
      if (questionId == '14') {
        questionId = 19;
      } else {
        if (questionId >= '14') {
          questionId--;
        }
      }
      if (questionId == '16' || questionId == '15') {
        subQuestion = true;
      }
    }

    console.log(this.$stateParams.year, questionId, this.questionFactory.getAnswerStatus(this.surveyId, questionId, subQuestion));
    return this.questionFactory.getAnswerStatus(this.surveyId, questionId, subQuestion);
  }
}

export default SurveyController;
