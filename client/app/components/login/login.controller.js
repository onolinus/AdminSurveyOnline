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
      this.userFactory.authenticate(this.auth.email, this.auth.password).then((res) => {
        if ($.inArray(this.userFactory.getAuth().user_type, [ "validator", "guest", "correspondent"])  > -1) {
          this.$state.go('home');
        } else {
          this.$state.go('dashboard');
        }
      }, (data) => {
        angular.forEach(data.error.message, (message) => {
          this.toastr.error(message, 'Login error');
        });

        form.email.$setValidity("required", false);
        form.password.$setValidity("required", false);
      });
    } else {
      this.toastr.error('Isi semua data dengan benar', 'Login error');
    }
  };
}

export default LoginController;
