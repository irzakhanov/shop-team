const { Router } = require("express")
const { brandsController } = require("../controllers/brands.controller")

const router = Router()

router.post("/admin/add", brandsController.addBrand)
router.get("/", brandsController.getAllBrands)
router.patch("/admin/brand/:id", brandsController.updateBrand)
router.delete("/admin/brand/:id", brandsController.deleteBrand)

module.exports = router
