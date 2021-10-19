const { Router } = require("express")
const { categoriesController } = require("../controllers/categories.controller")

const router = Router()

router.post("/", categoriesController.addCategory)
router.get("/", categoriesController.getAllCategories)
router.patch("/:id", categoriesController.updateCategory)
router.delete("/:id", categoriesController.deleteCategory)

module.exports = router
