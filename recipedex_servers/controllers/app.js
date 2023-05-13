
const Stores = require("../models/stores").Stores;

function toRad(Value)
{
    return Value * Math.PI / 180;
}

//This function takes in Latitude and longitude of two locations
// and returns the distance between them as the crow flies (in meters)
function calcCrow(coords1, coords2)
{
  // var R = 6.371; // km
  var R = 6371000;
  var dLat = toRad(coords2.Lat-coords1.Lat);
  var dLon = toRad(coords2.Lon-coords1.Lon);
  var Lat1 = toRad(coords1.Lat);
  var Lat2 = toRad(coords2.Lat);

  var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(Lat1) * Math.cos(Lat2); 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var d = R * c;
  return d;
}


const findStoresWithinDistance = async (req,res) => {
    let all_stores = await Stores.find();
    let response_json = [];
    for(let store of all_stores) {
        if(calcCrow(store.addr.location,{Lat:req.query.Lat, Lon:req.query.Lon}) <= req.query.distanceFrom) {
            response_json.push(store);
        }
    }
    return res.status(200).json(response_json);
}

module.exports = {findStoresWithinDistance};