class LoginController {

  constructor($state, User, toastr) {
    "ngInject";

    this.auth = {};
    this.userFactory = User;
    this.toastr = toastr;
  }

  login = (form, event) => {

    this.formSubmitted = true;

    if(form.$valid){
      this.userFactory.authenticate(this.auth.email, this.auth.password).then((res) => {

      }, (data) => {
        angular.forEach(data.error.message, (message) => {
          this.toastr.error(message, 'Login error');
        });
        form.email.$setValidity("required", false);
        form.password.$setValidity("required", false);
      });
    } else {
      this.toastr.error('Isi semua data dengan benar', 'Login error');
      console.log(form);
    }
  };
}

export default LoginController;
