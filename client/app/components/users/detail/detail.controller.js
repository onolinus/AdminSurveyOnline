class DetailController {
  constructor($http, User, toastr, $state, apiURL) {
    "ngInject";

    this.$http = $http;
    this.User = User;
    this.$state = $state;
    this.apiURL = apiURL;
    this.toastr = toastr;
  }

  changePassword = (form, $event) => {
    const request = {
      method: 'PUT',
      url: this.apiURL + '/user/' + this.userDetail.id,
      data: {
        email: this.userDetail.email,
        password:this.userDetail.password
      },
      headers: {
        'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8',
        'Authorization': 'Bearer' + ' ' + this.User.getAuth().access_token
      }
    };

    this.formSubmitted = true;

    if (form.$valid) {
      this.$http(request)
        .success((res) => {
          this.toastr.success('Password berhasil di ganti', 'Success');
          this.$state.go('users');
        })
        .error((error) => {
          form.password.$setValidity("required", false);
          this.toastr.error('Isi semua data dengan benar', 'Error');
        });
    } else {
      this.toastr.error('Isi semua data dengan benar', 'Validation Error');
    }

    $event.preventDefault();
  }
}

export default DetailController;
