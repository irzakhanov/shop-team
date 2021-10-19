const { Router } = require("express");

const router = Router();

router.use("/users", require("./users.route"));
router.use("/products", require("./products.route"));
router.use("/brands", require("./brands.route"));
router.use("/reviews", require("./reviews.route"));
router.use("/cart", require("./cart.route"));
router.use("/categories", require("./categories.route"));

module.exports = router;
