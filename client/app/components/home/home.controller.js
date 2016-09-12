class HomeController {
  constructor(NgTableParams, $http, User, apiURL, blockUI) {
    "ngInject";
    this.User = User;
    this.apiURL = apiURL;
    this.$http = $http;

    // Get the reference to the block service.
    this.myBlockUI = blockUI.instances.get('correspondentBlockUI');

    this.correnspondenceTableParams = new NgTableParams( {count: 10 }, {
      getData: (params) => {
        const request = {
          method: 'GET',
          url: apiURL + '/validator/survey' + '?page=' + params.url().page + '&include=approved_by',
          headers: {
            'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8',
            'Authorization': 'Bearer' + ' ' + User.getAuth().access_token
          }
        };

        this.myBlockUI.start();

        return $http(request).then((users) => {
          console.log('survey data: ', users.data.data);
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

    console.log(this.correnspondenceTableParams);
  }

  getRandom = () => {
    const request = {
      method: 'GET',
      url: this.apiURL + '/validator/survey/random',
      headers: {
        'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8',
        'Authorization': 'Bearer' + ' ' + this.User.getAuth().access_token
      }
    };

    this.myBlockUI.start();

    this.$http(request).then((users) => {
      this.correnspondenceTableParams.reload();
    }, () => {
      //
    }).finally(()=>{
      this.myBlockUI.stop()
    });
  }

}

export default HomeController;
