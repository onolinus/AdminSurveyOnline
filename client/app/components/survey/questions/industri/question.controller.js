class QuestionController {
  constructor($scope, questionService, $state, $stateParams) {
    "ngInject";

    this.questionService = questionService;
    this.$state = $state;
    this.surveyId = $stateParams.survey_id;

    this.statusUpdated = false;
    this.questionService.updateAnswersStatus(this.surveyId);
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

  totalTenagaKerjaL = () => {
    return this.totalPenelitiL() + this.totalTeknisiL() + this.totalAdministrasiL()
  }

  totalTenagaKerjaP = () => {
    return this.totalPenelitiP() + this.totalTeknisiP() + this.totalAdministrasiP()
  }

  // Peneliti
  totalPenelitiL = () => {
    return this.totalPenelitiSainsL() + this.totalPenelitiTeknikL() + this.totalPenelitiSosialL();
  }

  totalPenelitiP = () => {
    return this.totalPenelitiSainsP() + this.totalPenelitiTeknikP() + this.totalPenelitiSosialP();
  }

  totalPenelitiSainsL = () => {
    return this.answer.peneliti_sains_d3_l + this.answer.peneliti_sains_s1_l + this.answer.peneliti_sains_s2_l +this.answer. peneliti_sains_s3_l
  }

  totalPenelitiSainsP = () => {
    return this.answer.peneliti_sains_d3_p + this.answer.peneliti_sains_s1_p + this.answer.peneliti_sains_s2_p +this.answer. peneliti_sains_s3_p
  }

  totalPenelitiTeknikL = () => {
    return this.answer.peneliti_teknik_smk_l + this.answer.peneliti_teknik_d3_l + this.answer.peneliti_teknik_s1_l + this.answer.peneliti_teknik_s2_l +this.answer. peneliti_teknik_s3_l
  }

  totalPenelitiTeknikP = () => {
    return this.answer.peneliti_teknik_smk_p + this.answer.peneliti_teknik_d3_p + this.answer.peneliti_teknik_s1_p + this.answer.peneliti_teknik_s2_p +this.answer. peneliti_teknik_s3_p
  }

  totalPenelitiSosialL = () => {
    return this.answer.peneliti_sosial_smk_l + this.answer.peneliti_sosial_d3_l + this.answer.peneliti_sosial_s1_l + this.answer.peneliti_sosial_s2_l +this.answer. peneliti_sosial_s3_l
  }

  totalPenelitiSosialP = () => {
    return this.answer.peneliti_sosial_smk_p + this.answer.peneliti_sosial_d3_p + this.answer.peneliti_sosial_s1_p + this.answer.peneliti_sosial_s2_p +this.answer. peneliti_sosial_s3_p
  }

  // teknisi
  totalTeknisiL = () => {
    return this.totalTeknisiSainsL() + this.totalTeknisiTeknikL() + this.totalTeknisiSosialL();
  }

  totalTeknisiP = () => {
    return this.totalTeknisiSainsP() + this.totalTeknisiTeknikP() + this.totalTeknisiSosialP();
  }

  totalTeknisiSainsL = () => {
    return this.answer.teknisi_sains_d3_l + this.answer.teknisi_sains_s1_l + this.answer.teknisi_sains_s2_l;
  }

  totalTeknisiSainsP = () => {
    return this.answer.teknisi_sains_d3_p + this.answer.teknisi_sains_s1_p + this.answer.teknisi_sains_s2_p;
  }

  totalTeknisiTeknikL = () => {
    return this.answer.teknisi_teknik_smk_l + this.answer.teknisi_teknik_d3_l + this.answer.teknisi_teknik_s1_l + this.answer.teknisi_teknik_s2_l
  }

  totalTeknisiTeknikP = () => {
    return this.answer.teknisi_teknik_smk_p + this.answer.teknisi_teknik_d3_p + this.answer.teknisi_teknik_s1_p + this.answer.teknisi_teknik_s2_p
  }

  totalTeknisiSosialL = () => {
    return this.answer.teknisi_sosial_smk_l + this.answer.teknisi_sosial_d3_l + this.answer.teknisi_sosial_s1_l + this.answer.teknisi_sosial_s2_l
  }

  totalTeknisiSosialP = () => {
    return this.answer.teknisi_sosial_smk_p + this.answer.teknisi_sosial_d3_p + this.answer.teknisi_sosial_s1_p + this.answer.teknisi_sosial_s2_p
  }

  // administrasi
  totalAdministrasiL = () => {
    return this.totalAdministrasiSainsL() + this.totalAdministrasiTeknikL() + this.totalAdministrasiSosialL();
  }

  totalAdministrasiP = () => {
    return this.totalAdministrasiSainsP() + this.totalAdministrasiTeknikP() + this.totalAdministrasiSosialP();
  }

  totalAdministrasiSainsL = () => {
    return this.answer.tenaga_administrasi_sains_d3_l + this.answer.tenaga_administrasi_sains_s1_l + this.answer.tenaga_administrasi_sains_s2_l;
  }

  totalAdministrasiSainsP = () => {
    return this.answer.tenaga_administrasi_sains_d3_p + this.answer.tenaga_administrasi_sains_s1_p + this.answer.tenaga_administrasi_sains_s2_p;
  }

  totalAdministrasiTeknikL = () => {
    return this.answer.tenaga_administrasi_teknik_smk_l + this.answer.tenaga_administrasi_teknik_d3_l + this.answer.tenaga_administrasi_teknik_s1_l + this.answer.tenaga_administrasi_teknik_s2_l
  }

  totalAdministrasiTeknikP = () => {
    return this.answer.tenaga_administrasi_teknik_smk_p + this.answer.tenaga_administrasi_teknik_d3_p + this.answer.tenaga_administrasi_teknik_s1_p + this.answer.tenaga_administrasi_teknik_s2_p
  }

  totalAdministrasiSosialL = () => {
    return this.answer.tenaga_administrasi_sosial_smk_l + this.answer.tenaga_administrasi_sosial_d3_l + this.answer.tenaga_administrasi_sosial_s1_l + this.answer.tenaga_administrasi_sosial_s2_l
  }

  totalAdministrasiSosialP = () => {
    return this.answer.tenaga_administrasi_sosial_smk_p + this.answer.tenaga_administrasi_sosial_d3_p + this.answer.tenaga_administrasi_sosial_s1_p + this.answer.tenaga_administrasi_sosial_s2_p
  }
}

export default QuestionController;
