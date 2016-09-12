class UsersController {
  constructor($state, toastr, User, NgTableParams, apiURL, blockUI, $http, $uibModal) {
    "ngInject";

    this.toastr = toastr;
    this.$state = $state;
    this.$uibModal = $uibModal;
    this.apiURL = apiURL;
    this.User = User;
    this.$http = $http;

    const myBlockUI = blockUI.instances.get('usersBlockUI');

    this.usersTableParams = new NgTableParams( {count: 10 }, {
      getData: function(params) {
        const request = {
          method: 'GET',
          url: apiURL + '/user' + '?page=' + params.url().page + '&filter=guest',
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

  remove = (userId) => {
    this.$uibModal.open({
      animation: true,
      template: '' +
        '<div class="modal-body">' +
          '<h4>Apakah anda yakin untuk menghapus data ini?</h4>' +
        '</div>'+
        '<div class="modal-footer">'+
          '<div class="pull-right text-center mtop20">' +
            '<a href="#" ng-click="$close()" class="btn btn-sm btn-success"><i class="fa fa-check"></i>Hapus</a>' +
            '<a href="#" ng-click="$dismiss()" class="btn btn-sm btn-danger"><i class="fa fa-close"></i>Batal</a>' +
          '</div>' +
        '</div>',
        windowClass: 'sm'
    }).result.then(() => {
      const request = {
        method: 'DElETE',
        url: this.apiURL + '/user/' + userId,
        headers: {
          'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8',
          'Authorization': 'Bearer' + ' ' + this.User.getAuth().access_token
        }
      };

      this.$http(request).then(() => {
        this.usersTableParams.reload();
      });
    });
  }
}

export default UsersController;
