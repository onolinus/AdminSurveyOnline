class MenuController {
  constructor(User, $state) {
    "ngInject";

    this.auth = User.getAuth();

    this.$state = $state;
  }
}

export default MenuController;
