const express = require('express')
const controller = require("../controllers/app");
const router = express.Router();

router.get('/',controller.findStoresWithinDistance);

router.get('/products',controller.findStoresWithinDistance);

router.get('/recipe',controller.getRecipe);

router.get('/getStoresWithProducts',controller.getStoresWithProducts);

module.exports = router;