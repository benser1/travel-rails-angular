function Trip($resource) {
  var Trip = $resource('/trips/:id.json', {id: '@id'}, {
  update: { method: 'PUT' }
});
  return Trip;
}

angular
  .module('app')
  .factory('Trip', Trip);
