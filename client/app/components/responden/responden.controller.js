class RespondenController {
  constructor($state, NgTableParams, $http, User, appConfig, blockUI, toastr) {
    "ngInject";
    this.User = User;
    this.$state = $state;
    this.apiURL = appConfig.api_url;
    this.$http = $http;
    this.toastr = toastr;

    // Get the reference to the block service.
    this.myBlockUI = blockUI.instances.get('correspondentBlockUI');

    this.correnspondenceTableParams = new NgTableParams( {count: 10 }, {
      getData: (params) => {
        const request = {
          method: 'GET',
          url: this.apiURL + '/api/validator/survey?status=' + '&page=' + params.url().page + '&includes=respondent,validator',
          headers: {
            'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8',
            'Authorization': 'Bearer' + ' ' + User.getAuth().access_token
          }
        };

        this.myBlockUI.start();

        return $http(request).then((res) => {
          params.total(res.data.meta.pagination.total);
          return res.data.data;
        }, () => {
          params.total(0);
          return [];
        }).finally(()=>{
          this.myBlockUI.stop()
        });
      },
      counts: []
    });
  }

  unlock = (respondenData) => {
  	const request = {
      method: 'PUT',
      url: respondenData.survey.links.reject,
      headers: {
        'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8',
        'Authorization': 'Bearer' + ' ' + this.User.getAuth().access_token
      }
    };

  	this.$http(request).then((response) => {
  		this.correnspondenceTableParams.reload();
  		this.toastr.success('Responden ' + respondenData.name +' telah di unlock', 'Unlock Responden');
  	}, (data) => {
  		angular.forEach(data.error.message, (message) => {
          this.toastr.error(message, 'Unlock Responden');
        });
  	});
  }

  detail = (survey) => {
    this.$state.go('survey', {survey_id: survey.id, year: survey.year});
  }
}

export default RespondenController;
