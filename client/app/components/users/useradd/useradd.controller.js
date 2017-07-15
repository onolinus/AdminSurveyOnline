class UseraddController {
  constructor($http, User, toastr, $state, appConfig) {
    "ngInject";

    this.$http = $http;
    this.User = User;
    this.$state = $state;
    this.apiURL = appConfig.api_url;
    this.toastr = toastr;

    this.user = {};
  }

  addUser = (form, $event) => {
    const request = {
      method: 'POST',
      url: this.apiURL + '/user',
      data: $.param({
        email: this.user.email,
        password: this.user.password,
        confirm_password: this.user.password,
        type: 'guest'
      }),
      headers: {
        'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8',
        'Authorization': 'Bearer' + ' ' + this.User.getAuth().access_token
      }
    };

    this.formSubmitted = true;

    if (form.$valid) {
      this.$http(request)
        .success((res) => {
          this.toastr.success('User berhasil di tambah', 'Success');
          this.$state.go('users');
        })
        .error((error) => {
          angular.forEach(error.error.message, (message) => {
            this.toastr.error(message, 'Error');
          });
          form.password.$setValidity("required", false);
          form.email.$setValidity("required", false);

          // console.log(form.email);
        });
    } else {
      this.toastr.error('Isi semua data dengan benar', 'Validation Error');
    }

    $event.preventDefault();
  }
}

export default UseraddController;
