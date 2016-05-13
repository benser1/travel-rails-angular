function Trip($resource) {
  var Trip = $resource('http://localhost:3000/trips/:id.json', {id: '@id'}, {
  update: { method: 'PUT' }
});
  return Trip;
}

angular
  .module('app')
  .factory('Trip', Trip);
