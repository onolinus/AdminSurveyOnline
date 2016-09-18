class ModalRejectController {
  constructor($uibModalInstance, subQuestion, questionKeys) {
    "ngInject";
    this.subQuestion = subQuestion;
    this.questionKeys = questionKeys;
  }
}

export default ModalRejectController;