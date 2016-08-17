class HomeController {
  constructor(NgTableParams, $http, User, apiURL, blockUI) {
    "ngInject";
    this.user = {};
    this.correnspondence = [];

    // Get the reference to the block service.
    const myBlockUI = blockUI.instances.get('correspondentBlockUI');

    console.log(myBlockUI);

    this.correnspondenceTableParams = new NgTableParams( {count: 10 }, {
      getData: function(params) {
        const request = {
          method: 'GET',
          url: apiURL + '/admin/correspondent' + '?page=' + params.url().page + '&include=approved_by',
          headers: {
            'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8',
            'Authorization': 'Bearer' + ' ' + User.getAuth().access_token
          }
        };

        myBlockUI.start();

        return $http(request).then((users) => {
          params.total(users.data.meta.pagination.total);
          this.correnspondence = users.data.data;
          console.log(users.data.data);
          return users.data.data;
        }, () => {
          params.total(0);
          return [];
        }).finally(()=>{
          myBlockUI.stop()
        });
      },
      counts: []
    });
  }


}

export default HomeController;
