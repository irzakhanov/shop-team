const { Router } = require("express");
const { reviewsController } = require('../controllers/reviews.controller')

const router = Router();

router.get("/", reviewsController.getReviews);
router.post("/", reviewsController.addReview);
router.delete("/admin/:id", reviewsController.deleteReview);
router.patch("/:id", reviewsController.patchReview);


module.exports = router;

