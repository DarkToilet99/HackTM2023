const mongoose = require("mongoose");

const StoreSchema = new mongoose.Schema({
  addrstring: {
    type: String,
    required: false
  },
  zipcode : {
    type: String,
    required: false
  },
  contactdetails : {
    type: String,
    required: false
  },
  location: {
    type: Object,
    required: true
  },
  name: {
    type: String,
    required: false
  },
  addr: {
    type: Object,
    required: false
  },
  type: {
    type: Object,
    required: false
  },
  workhour: {
    type: String,
    required: false
  },
});

const Stores = mongoose.model("Stores", StoreSchema,"Stores");

module.exports = { Stores };