class ValidatorController {
  constructor($state, toastr, User, NgTableParams, apiURL, blockUI, $http) {
    "ngInject";

    this.toastr = toastr;
    this.$state = $state;

     const myBlockUI = blockUI.instances.get('usersBlockUI');

    this.validatorTableParams = new NgTableParams( {count: 10 }, {
      getData: function(params) {
        const request = {
          method: 'GET',
          url: apiURL + '/user' + '?page=' + params.url().page + '&filter=validator',
          headers: {
            'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8',
            'Authorization': 'Bearer' + ' ' + User.getAuth().access_token
          }
        };

        myBlockUI.start();

        return $http(request).then((users) => {
          params.total(users.data.meta.pagination.total);
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

export default ValidatorController;
