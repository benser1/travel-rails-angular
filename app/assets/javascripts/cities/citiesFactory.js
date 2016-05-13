function City($resource) {
  var City = $resource('http://localhost:3000/cities/:id.json', {id: '@id'}, {
  update: { method: 'PUT' }
});
  return City;
}

angular
  .module('app')
  .factory('City', City);
