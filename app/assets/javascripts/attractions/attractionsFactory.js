function Attraction($resource) {
  var Attraction = $resource('/attractions/:id.json', {id: '@id'}, {
  update: { method: 'PUT' }
});
  return Attraction;
}

angular
  .module('app')
  .factory('Attraction', Attraction);
