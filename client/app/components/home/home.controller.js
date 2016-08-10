class HomeController {
  constructor(NgTableParams, $http) {
    "ngInject";
    this.users = [];

    this.usersTableParams = new NgTableParams( {count: 10 }, {
      getData: function(params) {
        return $http.get('https://jsonplaceholder.typicode.com/users').then((users) => {
          console.log('users', users.data);
          params.total(25);
          this.users = users.data;
          return users.data;
        }, () => {
          params.total(0);
          return [];
        });
      }
    });
  }


}

export default HomeController;
