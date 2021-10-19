const { Router } = require("express")
const { categoriesController } = require("../controllers/categories.controller")

const router = Router()

router.post("/admin/add", categoriesController.addCategory)
router.get("/", categoriesController.getAllCategories)
router.patch("/admin/category/:id", categoriesController.updateCategory)
router.delete("/admin/category/:id", categoriesController.deleteCategory)

module.exports = router
