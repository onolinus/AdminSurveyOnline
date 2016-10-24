class RespondenController {
  constructor(NgTableParams, $http, User, apiURL, blockUI, toastr) {
    "ngInject";
    this.User = User;
    this.apiURL = apiURL;
    this.$http = $http;
    this.toastr = toastr;

    // Get the reference to the block service.
    this.myBlockUI = blockUI.instances.get('correspondentBlockUI');

    this.correnspondenceTableParams = new NgTableParams( {count: 10 }, {
      getData: (params) => {
        const request = {
          method: 'GET',
          url: apiURL + '/admin/correspondent' + '?page=' + params.url().page + '&include=approved_by,surveystatus',
          headers: {
            'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8',
            'Authorization': 'Bearer' + ' ' + User.getAuth().access_token
          }
        };

        console.log('getData', request);
        this.myBlockUI.start();

        return $http(request).then((users) => {
          // console.log('survey data: ', users.data.data);
          params.total(users.data.meta.pagination.total);
          return users.data.data;
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

}

export default RespondenController;
