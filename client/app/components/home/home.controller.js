class HomeController {
  constructor(NgTableParams, $http, User, apiURL) {
    "ngInject";
    this.user = {};
    this.correnspondence = [];

    this.correnspondenceTableParams = new NgTableParams( {count: 10 }, {
      getData: function(params) {
        const request = {
          method: 'GET',
          url: apiURL + '/admin/correspondent' + ((params.url().page > 1) ? '?page=' + params.url().page : ''),
          headers: {
            'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8',
            'Authorization': 'Bearer' + ' ' + User.getAuth().access_token
          }
        };

        return $http(request).then((users) => {
          params.total(users.data.meta.pagination.total);
          this.correnspondence = users.data.data;
          console.log(users.data.data);
          return users.data.data;
        }, () => {
          params.total(0);
          return [];
        });
      },
      counts: []
    });
  }


}

export default HomeController;
