class QuestionDynamicController {
  constructor($scope, questionService, questionFactory, $state, $stateParams, $http, appConfig, User) {
    "ngInject";

    this.questionFactory = questionFactory;
    this.questionService = questionService;
    this.$state = $state;
    this.$http = $http;
    this.User = User;
    this.appConfig = appConfig;

    this.$stateParams = $stateParams;
    this.surveyId = $stateParams.survey_id;

    this.answer = this.getAnswer();
    console.log(this.answer)
    this.countries = [];

    this.getCountries().then((countries) => {
      this.countries = countries.data;
    });
  }

  getSyncSetting(){
    let no = this.$state.$current.no;
    let sub = false;

    if (this.$state.params.year == '2017') {
      if (this.$state.$current.no == '14') {
        no = 19;
      } else {
        no = this.$state.$current.no - 1;
      }
    }

    if (no == '15' || no == '16') {
      sub = true;
    }

    return {no, sub};
  }


  getAnswer(){
    let {no, sub} = this.getSyncSetting();
    let answer = this.questionFactory.getAnswer(this.surveyId, no, sub);

    return answer;
  }

  getCountries() {
    const req = {
      method: 'GET',
      url: this.appConfig.api_url + '/api/countries',
      cache: true,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Authorization': 'Bearer' + ' ' + this.User.getAuth().access_token
      },
    };

    return this.$http(req)
      .then((response) => {
        return response.data;
      });
  }
}

export default QuestionDynamicController;
