function Attraction($resource) {
  var Attraction = $resource('http://localhost:3000/attractions/:id.json', {id: '@id'}, {
  update: { method: 'PUT' },
  delete: { method: 'DELETE' }
});
  return Attraction;
}

angular
  .module('app')
  .factory('Attraction', Attraction);
