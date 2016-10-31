class MenuController {
  constructor(User, $state) {
    "ngInject";

    this.auth = User.getAuth();
    console.log(this.auth);
    this.$state = $state;
  }
}

export default MenuController;
