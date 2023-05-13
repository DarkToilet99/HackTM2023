const mongoose = require("mongoose");

const ProductsInfoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: false
  },
  storeid: {
    type: String,
    required: false
  },
  unit: {
    type: String,
    required: false
  },
  price: {
    type: Number,
    required: false
  },
  retailcategname: {
    type: String,
    required: false
  },
  catprod : {
    type: Object,
    required: false
  },
  in_stock: {
    type: Boolean,
    required: false
  }
});

const ProductInfo = mongoose.model("ProductsInfo", ProductsInfoSchema,"ProductsInfo");

module.exports = { ProductInfo };