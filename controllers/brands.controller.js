const Brand = require("../models/Brand.model")

module.exports.brandsController = {
  addBrand: async (req, res) => {
    try {
      await Brand.create({
        name: req.body.name,
      })
      res.json("Брэнд добавлен")
    } catch (e) {
      res.json("Ошибка")
    }
  },
  getAllBrands: async (req, res) => {
    try {
      const brands = await Brand.find()
      res.json(brands)
    } catch (e) {
      res.json("Ошибка")
    }
  },
  updateBrand: async (req, res) => {
    try {
      await Brand.findByIdAndUpdate(req.params.id, { $set: req.body })
      res.json("Брэнд изменен")
    } catch (e) {
      res.json("Ошибка")
    }
  },
  deleteBrand: async (req, res) => {
    try {
      await Brand.findByIdAndRemove(req.params.id)
      res.json("Брэнд удален")
    } catch (e) {
      res.json("Ошибка")
    }
  },
}
