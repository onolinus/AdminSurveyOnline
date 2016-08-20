class UsersController {
  constructor($state, toastr, User, NgTableParams, apiURL, blockUI, $http) {
    "ngInject";

    this.toastr = toastr;
    this.$state = $state;

     const myBlockUI = blockUI.instances.get('usersBlockUI');

    this.usersTableParams = new NgTableParams( {count: 10 }, {
      getData: function(params) {
        const request = {
          method: 'GET',
          url: apiURL + '/user' + '?page=' + params.url().page,
          headers: {
            'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8',
            'Authorization': 'Bearer' + ' ' + User.getAuth().access_token
          }
        };

        myBlockUI.start();

        return $http(request).then((users) => {
          params.total(users.data.meta.pagination.total);
          console.log('Users', users.data.data);
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

export default UsersController;
