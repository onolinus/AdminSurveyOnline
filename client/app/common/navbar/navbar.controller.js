class NavbarController {
  constructor(User, $http, apiURL, $state) {
    "ngInject";

    this.auth = User.getAuth();
    this.User = User;
    this.apiURL = apiURL;
    this.$http = $http;
    this.$state = $state;

    this.userDetail();
  }

  userDetail = () => {
    const request = {
      method: 'GET',
      url: this.apiURL + '/user/' + this.auth.user_id,
      headers: {
        'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8',
        'Authorization': 'Bearer' + ' ' + this.auth.access_token
      }
    };

    return this.$http(request).then((res) => {
      this.userDetail = res.data.data;
    });
  }

  logout = () => {
    this.User.signout().then(() => {
      this.$state.go('login');
    });
  }
}

export default NavbarController;
