function Country($resource) {
  var Country = $resource('/countries/:id.json', {id: '@id'}, {
  update: { method: 'PUT' }
});
  return Country;
}

angular
  .module('app')
  .factory('Country', Country);
