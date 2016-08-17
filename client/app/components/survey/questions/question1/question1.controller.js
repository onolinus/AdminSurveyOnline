class Question1Controller {
  constructor(questionService) {
    "ngInject";

    this.questionService = questionService;
  }

  reject = () => {
    this.questionService.rejectAnswer(1);
  }
}

export default Question1Controller;
