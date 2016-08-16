class MenuController {
  constructor(User) {
    "ngInject";

    this.auth = User.getAuth();
  }
}

export default MenuController;
