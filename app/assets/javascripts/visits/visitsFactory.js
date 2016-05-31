function Visit($resource) {
  var Trip = $resource('/visits/:id.json', {id: '@id'}, {
  update: { method: 'PUT' }
});
  return Visit;
}

angular
  .module('app')
  .factory('Visit', Visit);
