const { Router } = require("express");
const { cartsController } = require("../controllers/cart.controller");

const router = Router();

router.post("/user/:userId/product/:productId/add", cartsController.addToCart);
router.patch("/user/:userId/product/:productId/remove", cartsController.removeCartItem);

module.exports = router;
