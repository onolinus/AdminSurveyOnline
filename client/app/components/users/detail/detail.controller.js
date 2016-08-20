class DetailController {
  constructor($http, User, toastr, $state) {
    "ngInject";

    this.$http = $http;
    this.User = User;
    this.$state = $state;
  }

  changPassword = (form, $event) => {
    const request = {
      method: 'PUT',
      url: apiURL + '/user',
      data: this.userDetail,
      headers: {
        'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8',
        'Authorization': 'Bearer' + ' ' + this.User.getAuth().access_token
      }
    };

    this.$http(request)
      .success((res) => {
        this.toastr.success('Password berhasil di ganti', 'Success');
        this.$state.go('users');
      })
      .error((error) => {
        this.toastr.error('Isi semua data dengan benar', 'Error');
      });

    $event.preventDefault();
  }
}

export default DetailController;
