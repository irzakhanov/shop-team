const { Router } = require("express");
const { cartsController } = require("../controllers/cart.controller");

const router = Router();

router.post("/user/:userId/add/product/:productId", cartsController.addCart);

module.exports = router;
