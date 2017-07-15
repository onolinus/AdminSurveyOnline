class ValidatoraddController {
  constructor($http, User, toastr, $state, appConfig) {
    "ngInject";

    this.$http = $http;
    this.User = User;
    this.$state = $state;
    this.apiURL = appConfig.api_url;
    this.toastr = toastr;

    this.validator = {};
  }

  addValidator = (form, $event) => {
    const request = {
      method: 'POST',
      url: this.apiURL + '/user',
      data: $.param({
        email: this.validator.email,
        password: this.validator.password,
        confirm_password: this.validator.password,
        type: 'validator'
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
          this.toastr.success('Validator berhasil di tambah', 'Success');
          this.$state.go('validator');
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

export default ValidatoraddController;
