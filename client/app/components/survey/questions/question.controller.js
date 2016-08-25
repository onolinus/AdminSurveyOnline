class QuestionController {
  constructor(questionService) {
    "ngInject";

    this.questionService = questionService;

    console.log('ans', this.answer);
  }

  reject = () => {
    this.questionService.rejectAnswer(1);
  }

  getSubjectFromResearchFieldCode = (code) => {
    let subject = '';
    angular.forEach(this.researchFields, (researchField) => {
      if (code == researchField.code) {
        subject = researchField.subject;
      }
    });

    return subject;
  }


  getBidangIlmuFromKlasifikasiFieldCode = (code) => {
    let bidang_ilmu = '';

    angular.forEach(this.klasifikasi, (klasifikasi) => {
      if (code == klasifikasi.code) {
        bidang_ilmu = klasifikasi.bidang_ilmu;
      }
    });

    return bidang_ilmu;
  }
}

export default QuestionController;
