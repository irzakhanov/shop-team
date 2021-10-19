const Review = require("../models/Review.model");
module.exports.reviewsController = {
  getReviews: async (req, res) => {
    try {
      const reviewGet = await Review.find();
      return res.json(reviewGet);
    } catch (e) {
      return res.json(e);
    }
  },
  addReview: async (req, res) => {
    try {
      await Review.create({
        text: req.body.text,
        user: req.params.id,
        product: req.params.id,
      });
      return res.json("Добавлено");
    } catch (e) {
      return res.json(e);
    }
  },
  deleteReview: async (req, res) => {
    try {
      await Review.findByIdAndRemove(req.params.id);
      return res.json("Удалено");
    } catch (e) {
      return res.json(e);
    }
  },
  patchReview: async (req, res) => {
    try {
      await Review.findByIdAndUpdate(
        req.params.id,
        { $set: req.body }
      );
    } catch (e) {
      return res.json(e);
    }
  },
};
