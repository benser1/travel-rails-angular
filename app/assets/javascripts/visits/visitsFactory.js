function Visit($resource) {
  var Trip = $resource('http://localhost:3000/visits/:id.json', {id: '@id'}, {
  update: { method: 'PUT' }
});
  return Visit;
}

angular
  .module('app')
  .factory('Visit', Visit);
