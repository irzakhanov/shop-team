const { Router } = require("express");
const { reviewsController } = require("../controllers/reviews.controller");

const router = Router();

router.get("/", reviewsController.getReviews);
router.get("/product/:productId", reviewsController.getReviewsProduct);
router.post("/user/:userId/product/:productId", reviewsController.addReview);
router.delete("/admin/review/:id", reviewsController.deleteReview);
router.patch("/:id", reviewsController.patchReview);

module.exports = router;
