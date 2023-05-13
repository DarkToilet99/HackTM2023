
const Stores = require("../models/stores").Stores;
const Recipes = require("../models/recipe").Recipes;
const ProductInfo = require("../models/products").ProductInfo;

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

const _findStoresWithinDistance = async (Lat, Lon, distanceFrom) => {
    let all_stores = await Stores.find();
    let stores_within_distance = [];
    for(let store of all_stores) {
        if(calcCrow(store.addr.location,{Lat:Lat, Lon:Lon}) <= distanceFrom) {
          stores_within_distance.push(store);
        }
    }

    return stores_within_distance;
}

const _getRecipe = async (recipe_id) => {
  let recipe = await Recipes.findById(recipe_id);
  return recipe;
}

const _getStoreProductsByCatprodId = async (store_id, catprod_ids) => {
    let store_products = await ProductInfo.find({"storeid" : store_id, "catprod.id" : {"$in" : catprod_ids}});
    return store_products;
}

const _getRecipeIngredientsIds = async(recipeId) => {
  let recipe = await _getRecipe(recipeId);
  let result = {};
  for (let ingredient in recipe["ingredient_product_index"]) {
    let ingredient_ids = recipe["ingredient_product_index"][ingredient].map((elem) => {return elem["id"]});
    result[ingredient] = ingredient_ids;
  }
  return result;
}


const getRecipe = async(req, res) => {
  let recipe = await _getRecipe(req.query.recipeId);
  recipe["ingredient_product_index"] = undefined;
  return res.status(200).json(recipe);
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


const infoAggregate = async (Lat, Lon, Distance, recipe_id) => {
    let stores_within_distance = await _findStoresWithinDistance(Lat, Lon, Distance);
    let recipe_ingredients_ids = await _getRecipeIngredientsIds(recipe_id);
    for (let i = 0; i < stores_within_distance.length; i++) {
      let found_ingredients_list = [];
      for(let ingredient_ids in recipe_ingredients_ids) {
        let found_ingredients = await _getStoreProductsByCatprodId(stores_within_distance[i]["id"], recipe_ingredients_ids[ingredient_ids]);
        found_ingredients_list.push(found_ingredients);
 
      }
      stores_within_distance[i]["found_ingredients_list"] = found_ingredients_list;
      break;
    }
    
    return stores_within_distance;
}



const getStoresWithProducts = async(req, res) => {
 let test = await infoAggregate(req.query.Lat, req.query.Lon, req.query.distanceFrom, req.query.recipeId);
 console.log(test[0]["found_ingredients_list"]);

  res.status(200).json(test);
}

module.exports = {findStoresWithinDistance, getRecipe, getStoresWithProducts};