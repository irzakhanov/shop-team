const { Router } = require("express")
const { categoriesController } = require("../controllers/categories.controller")

const router = Router()

router.post("/admin", categoriesController.addCategory)
router.get("/", categoriesController.getAllCategories)
router.patch("/:id/admin", categoriesController.updateCategory)
router.delete("/:id/admin", categoriesController.deleteCategory)

module.exports = router
