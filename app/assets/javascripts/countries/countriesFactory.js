function Country($resource) {
  var Country = $resource('http://localhost:3000/countries/:id.json', {id: '@id'}, {
  update: { method: 'PUT' }
});
  return Country;
}

angular
  .module('app')
  .factory('Country', Country);
