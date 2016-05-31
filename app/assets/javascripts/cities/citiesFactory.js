function City($resource) {
  var City = $resource('/cities/:id.json', {id: '@id'}, {
  update: { method: 'PUT' }
});
  return City;
}

angular
  .module('app')
  .factory('City', City);
