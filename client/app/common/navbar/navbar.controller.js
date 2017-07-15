class NavbarController {
  constructor(User, $http, appConfig, $state) {
    "ngInject";

    this.auth = User.getAuth();
    this.User = User;
    this.$state = $state;
    this.userDetail = this.auth.profile;
  }

  logout = () => {
    this.User.signout().then(() => {
      this.$state.go('login');
    });
  }
}

export default NavbarController;
