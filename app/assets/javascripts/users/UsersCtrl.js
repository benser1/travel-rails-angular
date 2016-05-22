function UsersCtrl(User){
  var ctrl = this;

  ctrl.users = User.query();
}

angular
  .module('app')
  .controller('UsersCtrl', UsersCtrl);
