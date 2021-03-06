'use strict';

export default class AdminController {

  /*@ngInject*/
  constructor(User, Modal) {

    // Use the User $resource to fetch all users
    this.users = User.query();

    // Our callback function is called if/when the delete modal is confirmed

    this.delete = Modal.confirm.delete(user => {
      user.$remove();
      this.users.splice(this.users.indexOf(user), 1);
    });
  }


}
