const { Router } = require("express");
const { reviewsController } = require('../controllers/reviews.controller')

const router = Router();

router.get("/", reviewsController.getReviews);
router.post("/", reviewsController.postReviews);
router.delete("/admin/:id", reviewsController.deleteReviews);
router.patch("/:id", reviewsController.patchReviews);


module.exports = router;

