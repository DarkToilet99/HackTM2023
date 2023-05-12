
const Stores = require("../models/stores").Stores;

const test = async (req,res) => {
    const allStores = await Stores.find({});
    return res.status(200).json(allStores);
}

module.exports = {test};