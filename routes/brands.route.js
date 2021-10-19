const { Router } = require("express")
const { brandsController } = require("../controllers/brands.controller")

const router = Router()

router.post("/admin", brandsController.addBrand)
router.get("/", brandsController.getAllBrands)
router.patch("/:id/admin", brandsController.updateBrand)
router.delete("/:id/admin", brandsController.deleteBrand)

module.exports = router
