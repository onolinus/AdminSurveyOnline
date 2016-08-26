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

  getTotalQ9_FP_HL = () => {
    return this.answer.answer9b_total_peneliti_fungsional_s3_l + this.answer.answer9b_total_peneliti_fungsional_s2_l + this.answer.answer9b_total_peneliti_fungsional_s1_l;
  }

  getTotalQ9_FP_HP = () => {
    return this.answer.answer9b_total_peneliti_fungsional_s3_p + this.answer.answer9b_total_peneliti_fungsional_s2_p + this.answer.answer9b_total_peneliti_fungsional_s1_p;
  }

  getTotalQ9_FP_FTEL = () => {
    return this.answer.answer9b_total_peneliti_fungsional_s3_fte_l + this.answer.answer9b_total_peneliti_fungsional_s2_fte_l + this.answer.answer9b_total_peneliti_fungsional_s1_fte_l;
  }

  getTotalQ9_FP_FTEP = () => {
    return this.answer.answer9b_total_peneliti_fungsional_s3_fte_p + this.answer.answer9b_total_peneliti_fungsional_s2_fte_p + this.answer.answer9b_total_peneliti_fungsional_s1_fte_p;
  }
  //peneliti non fungsional
  getTotalQ9_FNP_HL = () => {
    return this.answer.answer9b_total_nonpeneliti_fungsional_s3_l + this.answer.answer9b_total_nonpeneliti_fungsional_s2_l + this.answer.answer9b_total_nonpeneliti_fungsional_s1_l;
  }

  getTotalQ9_FNP_HP = () => {
    return this.answer.answer9b_total_nonpeneliti_fungsional_s3_p + this.answer.answer9b_total_nonpeneliti_fungsional_s2_p + this.answer.answer9b_total_nonpeneliti_fungsional_s1_p;
  }

  getTotalQ9_FNP_FTEL = () => {
    return this.answer.answer9b_total_nonpeneliti_fungsional_s3_fte_l + this.answer.answer9b_total_nonpeneliti_fungsional_s2_fte_l + this.answer.answer9b_total_nonpeneliti_fungsional_s1_fte_l;
  }

  getTotalQ9_FNP_FTEP = () => {
    return this.answer.answer9b_total_nonpeneliti_fungsional_s3_fte_p + this.answer.answer9b_total_nonpeneliti_fungsional_s2_fte_p + this.answer.answer9b_total_nonpeneliti_fungsional_s1_fte_p;
  }

  // peneliti tanpa jabatan fungsional
  getTotalQ9_NF_HL = () => {
    return this.answer.answer9b_total_peneliti_nonfungsional_s3_l + this.answer.answer9b_total_peneliti_nonfungsional_s2_l + this.answer.answer9b_total_peneliti_nonfungsional_s1_l;
  }

  getTotalQ9_NF_HP = () => {
    return this.answer.answer9b_total_peneliti_nonfungsional_s3_p + this.answer.answer9b_total_peneliti_nonfungsional_s2_p + this.answer.answer9b_total_peneliti_nonfungsional_s1_p;
  }

  getTotalQ9_NF_FTEL = () => {
    return this.answer.answer9b_total_peneliti_nonfungsional_s3_fte_l + this.answer.answer9b_total_peneliti_nonfungsional_s2_fte_l + this.answer.answer9b_total_peneliti_nonfungsional_s1_fte_l;
  }

  getTotalQ9_NF_FTEP = () => {
    return this.answer.answer9b_total_peneliti_nonfungsional_s3_fte_p + this.answer.answer9b_total_peneliti_nonfungsional_s2_fte_p + this.answer.answer9b_total_peneliti_nonfungsional_s1_fte_p;
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
    return this.answer.answer9b_total_teknisi_s1_l + this.answer.answer9b_total_teknisi_d3_l + this.answer.answer9b_total_teknisi_belowd3_l;
  }

  getTotalQ9_teknisi_HP = () => {
    return this.answer.answer9b_total_teknisi_s1_p + this.answer.answer9b_total_teknisi_d3_p + this.answer.answer9b_total_teknisi_belowd3_p;
  }

  getTotalQ9_teknisi_FTEL = () => {
    return this.answer.answer9b_total_teknisi_s1_fte_l + this.answer.answer9b_total_teknisi_d3_fte_l + this.answer.answer9b_total_teknisi_belowd3_fte_l;
  }

  getTotalQ9_teknisi_FTEP = () => {
    return this.answer.answer9b_total_teknisi_s1_fte_p + this.answer.answer9b_total_teknisi_d3_fte_p + this.answer.answer9b_total_teknisi_belowd3_fte_p;
  }

  //staff lainnya
  getTotalQ9_staff_HL = () => {
    return this.answer.answer9b_total_staffpendukung_s1_l + this.answer.answer9b_total_staffpendukung_d3_l + this.answer.answer9b_total_staffpendukung_belowd3_l;
  }

  getTotalQ9_staff_HP = () => {
    return this.answer.answer9b_total_staffpendukung_s1_p + this.answer.answer9b_total_staffpendukung_d3_p + this.answer.answer9b_total_staffpendukung_belowd3_p;
  }

  getTotalQ9_staff_FTEL = () => {
    return this.answer.answer9b_total_staffpendukung_s1_fte_l + this.answer.answer9b_total_staffpendukung_d3_fte_l + this.answer.answer9b_total_staffpendukung_belowd3_fte_l;
  }

  getTotalQ9_staff_FTEP = () => {
    return this.answer.answer9b_total_staffpendukung_s1_fte_p + this.answer.answer9b_total_staffpendukung_d3_fte_p + this.answer.answer9b_total_staffpendukung_belowd3_fte_p;
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

}

export default QuestionController;
