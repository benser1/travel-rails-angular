var requestParms = {
  clientId: "11XT4KZISEOIM1TOXNMU5K4UE1YHRDLRGFIRV2LQBSD23DDU",
  clientSecret: "X30JWSQIESMYBIRITQMLBALXRCFA2Q0SVGMZWKMMVJMMZAIA",
  version: "20160201"
}

function placesExplorerService($resource) {
  var requestUri = 'https://api.foursquare.com/v2/venues/:action';

  return $resource(requestUri,
    {
      action: 'explore',
      client_id: requestParms.clientId,
      client_secret: requestParms.clientSecret,
      v: requestParms.version,
      // venuePhotos: '1',
      callback: 'JSON_CALLBACK'
    },
    {
      get: { method: 'JSONP' }
    });
  }

  angular
  .module('app')
  .factory('placesExplorerService', placesExplorerService);
