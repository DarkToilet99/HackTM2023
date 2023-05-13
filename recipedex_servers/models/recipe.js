const mongoose = require("mongoose");

const RecipeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: false
  },
  ingredients: {
    type: Array,
    required: false
  },
  instructions: {
    type: String,
    required: false
  },
  ingredient_product_index: {
    type: Object,
    required: false
  }
});

const Recipes = mongoose.model("Recipes", RecipeSchema,"Recipes");

module.exports = { Recipes };