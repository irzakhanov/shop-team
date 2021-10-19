const Cart = require("../models/Cart.model");

module.exports.cartsController = {
  addToCart: async (req, res) => {
    try {
      const cart = await Cart.findOne({ user: req.params.userId });
      if (!cart) {
        await Cart.create({
          user: req.params.userId,
        });
      }
      await Cart.updateOne(
        { user: req.params.userId },
        { $push: { products: req.params.productId } }
      );

      res.json("Продукт добавлен в корзину");
    } catch (e) {
      res.json(e);
    }
  },
  removeCartItem: async (req, res) => {
    try {
      await Cart.updateOne(
        { user: req.params.userId },
        { $pull: { products: req.params.productId } }
      );

      res.json("Продукт удален из корзины");
    } catch (e) {
      res.json(e);
    }
  },
};
