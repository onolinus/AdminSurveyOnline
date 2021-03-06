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

  parseMoney = (money) => {
    if (money == 0) return money;

    money = ''+money;

    return Number(money.replace(/[^0-9\,-]+/g,"").replace(',', '.'));
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

  getSubjectFromSocioEconomicsCode = (code) => {
    let subject = '';
    angular.forEach(this.researchFields, (researchField) => {
      if (code == researchField.code) {
        subject = researchField.group;
      }
    });

    return subject;
  }

  getBidangIlmuFromKlasifikasiFieldCode = (code) => {
    let bidang_ilmu = '';

    angular.forEach(this.klasifikasi, (klasifikasi) => {
      if (code == klasifikasi.code) {
        bidang_ilmu = klasifikasi.kelompok;
      }
    });

    return bidang_ilmu;
  }

  getTotalQ3 = () => {
    return this.parseMoney(this.getTotalDIPA()) + this.parseMoney(this.getTotalNonDIPA());
  }


  getTotalDIPA = () => {
    return this.parseMoney(this.answer.dipa_danapemerintah) + this.parseMoney(this.getTotalPNPB()) + this.parseMoney(this.answer.dipa_phln);
  }

  getTotalNonDIPA = () => {
    return this.parseMoney(this.answer.nondipa_insentif_ristekdikti) + this.parseMoney(this.answer.nondipa_insentif_researchgrant) + this.parseMoney(this.answer.nondipa_insentif_dalamnegeri);
  }

  getTotalPNPB = () => {
    return this.parseMoney(this.answer.dipa_pnbp_perusahaanswasta) + this.parseMoney(this.answer.dipa_pnbp_instansipemerintah) + this.parseMoney(this.answer.dipa_pnbp_swastanonprofit) + this.parseMoney(this.answer.dipa_pnbp_luarnegeri);
  }

  getTotalQ4 = () => {
    return this.parseMoney(this.answer.belanja_pegawai_upah) + this.parseMoney(this.answer.belanja_modal_properti) + this.parseMoney(this.answer.belanja_modal_mesin) + this.parseMoney(this.answer.belanja_operasional_maintenance);
  }

  getTotalQ7 = () => {
    return this.parseMoney(this.answer.penelitian_dasar) + this.parseMoney(this.answer.penelitian_terapan) + this.parseMoney(this.answer.pengembangan_eksperimental);
  }

  getTotalQ9_FP_HL = () => {
    return this.answer['9B'].peneliti_fungsional_peneliti_s3_l + this.answer['9B'].peneliti_fungsional_peneliti_s2_l + this.answer['9B'].peneliti_fungsional_peneliti_s1_l;
  }

  getTotalQ9_FP_HP = () => {
    return this.answer['9B'].peneliti_fungsional_peneliti_s3_p + this.answer['9B'].peneliti_fungsional_peneliti_s2_p + this.answer['9B'].peneliti_fungsional_peneliti_s1_p;
  }

  getTotalQ9_FP_FTEL = () => {
    return this.answer['9B'].peneliti_fungsional_peneliti_s3_fte_l + this.answer['9B'].peneliti_fungsional_peneliti_s2_fte_l + this.answer['9B'].peneliti_fungsional_peneliti_s1_fte_l;
  }

  getTotalQ9_FP_FTEP = () => {
    return this.answer['9B'].peneliti_fungsional_peneliti_s3_fte_p + this.answer['9B'].peneliti_fungsional_peneliti_s2_fte_p + this.answer['9B'].peneliti_fungsional_peneliti_s1_fte_p;
  }

  //peneliti non fungsional
  getTotalQ9_FNP_HL = () => {
    return this.answer['9B'].peneliti_fungsional_nonpeneliti_s3_l + this.answer['9B'].peneliti_fungsional_nonpeneliti_s2_l + this.answer['9B'].peneliti_fungsional_nonpeneliti_s1_l;
  }

  getTotalQ9_FNP_HP = () => {
    return this.answer['9B'].peneliti_fungsional_nonpeneliti_s3_p + this.answer['9B'].peneliti_fungsional_nonpeneliti_s2_p + this.answer['9B'].peneliti_fungsional_nonpeneliti_s1_p;
  }

  getTotalQ9_FNP_FTEL = () => {
    return this.answer['9B'].peneliti_fungsional_nonpeneliti_s3_fte_l + this.answer['9B'].peneliti_fungsional_nonpeneliti_s2_fte_l + this.answer['9B'].peneliti_fungsional_nonpeneliti_s1_fte_l;
  }

  getTotalQ9_FNP_FTEP = () => {
    return this.answer['9B'].peneliti_fungsional_nonpeneliti_s3_fte_p + this.answer['9B'].peneliti_fungsional_nonpeneliti_s2_fte_p + this.answer['9B'].peneliti_fungsional_nonpeneliti_s1_fte_p;
  }

  // peneliti tanpa jabatan fungsional
  getTotalQ9_NF_HL = () => {
    return this.answer['9B'].peneliti_nonfungsional_s3_l + this.answer['9B'].peneliti_nonfungsional_s2_l + this.answer['9B'].peneliti_nonfungsional_s1_l;
  }

  getTotalQ9_NF_HP = () => {
    return this.answer['9B'].peneliti_nonfungsional_s3_p + this.answer['9B'].peneliti_nonfungsional_s2_p + this.answer['9B'].peneliti_nonfungsional_s1_p;
  }

  getTotalQ9_NF_FTEL = () => {
    return this.answer['9B'].peneliti_nonfungsional_s3_fte_l + this.answer['9B'].peneliti_nonfungsional_s2_fte_l + this.answer['9B'].peneliti_nonfungsional_s1_fte_l;
  }

  getTotalQ9_NF_FTEP = () => {
    return this.answer['9B'].peneliti_nonfungsional_s3_fte_p + this.answer['9B'].peneliti_nonfungsional_s2_fte_p + this.answer['9B'].peneliti_nonfungsional_s1_fte_p;
  }

  // peneliti
  getTotalQ9_peneliti_HL = () => {
    return this.getTotalQ9_FP_HL() + this.getTotalQ9_FNP_HL() + this.getTotalQ9_NF_HL();
  }

  getTotalQ9_peneliti_HP = () => {
    return this.getTotalQ9_FP_HP() + this.getTotalQ9_FNP_HP() + this.getTotalQ9_NF_HP();
  }

  getTotalQ9_peneliti_FTEL = () => {
    return this.getTotalQ9_FP_FTEL() + this.getTotalQ9_FNP_FTEL() + this.getTotalQ9_NF_FTEL();
  }

  getTotalQ9_peneliti_FTEP = () => {
    return this.getTotalQ9_FP_FTEP() + this.getTotalQ9_FNP_FTEP() + this.getTotalQ9_NF_FTEP();
  }

  // teknisi
  getTotalQ9_teknisi_HL = () => {
    return this.answer['9B'].teknisi_s1_l + this.answer['9B'].teknisi_d3_l + this.answer['9B'].teknisi_belowd3_l;
  }

  getTotalQ9_teknisi_HP = () => {
    return this.answer['9B'].teknisi_s1_p + this.answer['9B'].teknisi_d3_p + this.answer['9B'].teknisi_belowd3_p;
  }

  getTotalQ9_teknisi_FTEL = () => {
    return this.answer['9B'].teknisi_s1_fte_l + this.answer['9B'].teknisi_d3_fte_l + this.answer['9B'].teknisi_belowd3_fte_l;
  }

  getTotalQ9_teknisi_FTEP = () => {
    return this.answer['9B'].teknisi_s1_fte_p + this.answer['9B'].teknisi_d3_fte_p + this.answer['9B'].teknisi_belowd3_fte_p;
  }

  //staff lainnya
  getTotalQ9_staff_HL = () => {
    return this.answer['9B'].staffpendukung_s1_l + this.answer['9B'].staffpendukung_d3_l + this.answer['9B'].staffpendukung_belowd3_l;
  }

  getTotalQ9_staff_HP = () => {
    return this.answer['9B'].staffpendukung_s1_p + this.answer['9B'].staffpendukung_d3_p + this.answer['9B'].staffpendukung_belowd3_p;
  }

  getTotalQ9_staff_FTEL = () => {
    return this.answer['9B'].staffpendukung_s1_fte_l + this.answer['9B'].staffpendukung_d3_fte_l + this.answer['9B'].staffpendukung_belowd3_fte_l;
  }

  getTotalQ9_staff_FTEP = () => {
    return this.answer['9B'].staffpendukung_s1_fte_p + this.answer['9B'].staffpendukung_d3_fte_p + this.answer['9B'].staffpendukung_belowd3_fte_p;
  }

  //total
  getTotalQ9_HL = () => {
    return this.getTotalQ9_peneliti_HL() + this.getTotalQ9_teknisi_HL() + this.getTotalQ9_staff_HL();
  }

  getTotalQ9_HP = () => {
    return this.getTotalQ9_peneliti_HP() + this.getTotalQ9_teknisi_HP() + this.getTotalQ9_staff_HP();
  }

  getTotalQ9_FTEL = () => {
    return this.getTotalQ9_peneliti_FTEL() + this.getTotalQ9_teknisi_FTEL() + this.getTotalQ9_staff_FTEL();
  }

  getTotalQ9_FTEP = () => {
    return this.getTotalQ9_peneliti_FTEP() + this.getTotalQ9_teknisi_FTEP() + this.getTotalQ9_staff_FTEP();
  }

  getTotalQ9B_S1_l = () => {
    return this.answer['9B'].peneliti_fungsional_peneliti_s1_l + this.answer['9B'].peneliti_fungsional_nonpeneliti_s1_l + this.answer['9B'].peneliti_nonfungsional_s1_l;
  }

  getTotalQ9B_S1_p = () => {
    return this.answer['9B'].peneliti_fungsional_peneliti_s1_p + this.answer['9B'].peneliti_fungsional_nonpeneliti_s1_p + this.answer['9B'].peneliti_nonfungsional_s1_p;
  }

  getTotalQ9B_S2_l = () => {
    return this.answer['9B'].peneliti_fungsional_peneliti_s2_l + this.answer['9B'].peneliti_fungsional_nonpeneliti_s2_l + this.answer['9B'].peneliti_nonfungsional_s2_l;
  }

  getTotalQ9B_S2_p = () => {
    return this.answer['9B'].peneliti_fungsional_peneliti_s2_p + this.answer['9B'].peneliti_fungsional_nonpeneliti_s2_p + this.answer['9B'].peneliti_nonfungsional_s2_p;
  }

  getTotalQ9B_S3_l = () => {
    return this.answer['9B'].peneliti_fungsional_peneliti_s3_l + this.answer['9B'].peneliti_fungsional_nonpeneliti_s3_l + this.answer['9B'].peneliti_nonfungsional_s3_l;
  }

  getTotalQ9B_S3_p = () => {
    return this.answer['9B'].peneliti_fungsional_peneliti_s3_p + this.answer['9B'].peneliti_fungsional_nonpeneliti_s3_p + this.answer['9B'].peneliti_nonfungsional_s3_p;
  }

  countAnswer9c_s1_l = () => {
    let total = 0;

    angular.forEach(this.answer['9C'].detail, function(ans, index){
      total += parseInt(ans.s1_l);
    });

    return total;
  }

  countAnswer9c_s1_p = () => {
    let total = 0;

    angular.forEach(this.answer['9C'].detail, function(ans, index){
      total += parseInt(ans.s1_p);
    });

    return total;
  }

  countAnswer9c_s2_l = () => {
    let total = 0;

    angular.forEach(this.answer['9C'].detail, function(ans, index){
      total += parseInt(ans.s2_l);
    });

    return total;
  }

  countAnswer9c_s2_p = () => {
    let total = 0;

    angular.forEach(this.answer['9C'].detail, function(ans, index){
      total += parseInt(ans.s2_p);
    });

    return total;
  }


  countAnswer9c_s3_l = () => {
    let total = 0;

    angular.forEach(this.answer['9C'].detail, function(ans, index){
      total += parseInt(ans.s3_l);
    });

    return total;
  }

  countAnswer9c_s3_p = () => {
    let total = 0;

    angular.forEach(this.answer['9C'].detail, function(ans, index){
      total += parseInt(ans.s3_p);
    });

    return total;
  }

  countAnswer10 = () => {
    let total = 0;

    angular.forEach(this.answer.detail, function(ans, index){
      total += parseInt(ans.jumlah_peneliti);
    });

    return total;
  }
}

export default QuestionController;
