var geohash = require('geohash').GeoHash;
var apiKey = process.env.MAP_API_KEY;

exports.get = function(req, res) {
    var latlon = geohash.decodeGeoHash(req.params["id"]);
    console.log("latlon: " + latlon);
    var lat = latlon.latitude[2];
    console.log("lat: " + lat);
    var lon = latlon.longitude[2];
    console.log("lon: " + lon);
    zoom = req.params["id"].length + 2;
    console.log("zoom: " + zoom);
    res.render('ttmap', {
	layout: false,
	lat:lat,
	lon:lon,
	zoom:zoom,
	geohash:req.params["id"],
	apiKey:apiKey
    });
};
