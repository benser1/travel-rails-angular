function User($resource) {
  var User = $resource('/users/:id.json', {id: '@id'}, {
  update: { method: 'PUT' }
});
  return User;
}

angular
  .module('app')
  .factory('User', User);
