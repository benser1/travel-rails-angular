var requestParms = {
  clientId: "11XT4KZISEOIM1TOXNMU5K4UE1YHRDLRGFIRV2LQBSD23DDU",
  clientSecret: "X30JWSQIESMYBIRITQMLBALXRCFA2Q0SVGMZWKMMVJMMZAIA",
  version: "20160201"
}

function placesPhotosService($resource) {
  var requestUri = 'https://api.foursquare.com/v2/venues/:venueId/:action';

  return $resource(requestUri,
        {
            action: 'photos',
            client_id: requestParms.clientId,
            client_secret: requestParms.clientSecret,
            v: requestParms.version,
            limit: '9',
            callback: 'JSON_CALLBACK'
        },
        {
            get: { method: 'JSONP' }
        });
  }

  angular
  .module('app')
  .factory('placesPhotosService', placesPhotosService);
