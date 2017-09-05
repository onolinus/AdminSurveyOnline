class LoginController {

  constructor($state, User, toastr) {
    "ngInject";

    this.auth = {};
    this.userFactory = User;
    this.toastr = toastr;
    this.$state = $state;
  }

  login = (form, event) => {

    this.formSubmitted = true;

    if(form.$valid){
      this.userFactory.authenticate(this.auth.email, this.auth.password).then((auth) => {
        if ($.inArray(auth.includes.profile.type, [ "validator", "guest", "correspondent"])  > -1) {
          this.$state.go('responden.list');
        } else {
          this.$state.go('dashboard');
        }
      }, (error) => {
        this.toastr.error(error.message, 'Login error');

        form.email.$setValidity("required", false);
        form.password.$setValidity("required", false);
      });
    } else {
      this.toastr.error('Isi semua data dengan benar', 'Login error');
    }
  };
}

export default LoginController;
