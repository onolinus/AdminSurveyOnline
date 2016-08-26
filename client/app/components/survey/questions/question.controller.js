class QuestionController {
  constructor(questionService) {
    "ngInject";

    this.questionService = questionService;
  }

  reject = () => {
    this.questionService.rejectAnswer(1);
  }

  formatMoney = (n, c, d, t) => {
    var c = isNaN(c = Math.abs(c)) ? 2 : c,
    d = d == undefined ? "." : d,
    t = t == undefined ? "," : t,
    s = n < 0 ? "-" : "",
    i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "",
    j = (j = i.length) > 3 ? j % 3 : 0;

   return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
  };

  parseMoney = (money) => {
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


  getBidangIlmuFromKlasifikasiFieldCode = (code) => {
    let bidang_ilmu = '';

    angular.forEach(this.klasifikasi, (klasifikasi) => {
      if (code == klasifikasi.code) {
        bidang_ilmu = klasifikasi.bidang_ilmu;
      }
    });

    return bidang_ilmu;
  }

  getTotalQ3 = () => {
    return this.formatMoney((this.parseMoney(this.getTotalDIPA()) + this.parseMoney(this.getTotalNonDIPA())), 2, ',', '.');
  }


  getTotalDIPA = () => {
    return this.formatMoney((this.parseMoney(this.answer.answer3_dipa_danapemerintah) + this.parseMoney(this.getTotalPNPB()) + this.parseMoney(this.answer.answer3_dipa_phln)), 2, ',', '.');
  }

  getTotalNonDIPA = () => {
    return this.formatMoney((this.parseMoney(this.answer.answer3_nondipa_insentif_ristekdikti) + this.parseMoney(this.answer.answer3_nondipa_insentif_researchgrant) + this.parseMoney(this.answer.answer3_nondipa_insentif_dalamnegeri)), 2, ',', '.');
  }

  getTotalPNPB = () => {
    return this.formatMoney((this.parseMoney(this.answer.answer3_dipa_pnbp_perusahaanswasta) + this.parseMoney(this.answer.answer3_dipa_pnbp_instansipemerintah) + this.parseMoney(this.answer.answer3_dipa_pnbp_swastanonprofit) + this.parseMoney(this.answer.answer3_dipa_pnbp_luarnegeri)), 2, ',', '.');
  }

  getTotalQ4 = () => {
    return this.formatMoney((this.parseMoney(this.answer.answer4_belanja_pegawai_upah) + this.parseMoney(this.answer.answer4_belanja_modal_properti) + this.parseMoney(this.answer.answer4_belanja_modal_mesin) + this.parseMoney(this.answer.answer4_belanja_operasional_maintenance)), 2, ',', '.');
  }

  getTotalQ7 = () => {
    return this.formatMoney((this.parseMoney(this.answer.answer7_penelitian_dasar) + this.parseMoney(this.answer.answer7_penelitian_terapan) + this.parseMoney(this.answer.answer7_pengembangan_eksperimental)), 2, ',', '.');
  }
}

export default QuestionController;
