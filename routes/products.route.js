const { Router } = require("express");
const { productsController } = require("../controllers/products.controller");

const router = Router();

router.post("/admin/add", productsController.addProduct); // Добавление продукта
router.get("/", productsController.getAllProduct); // Вывод всех продуктов
router.get("/:id", productsController.getProductByID); // Вывод продукта по ID
router.patch("/admin/product/:id", productsController.patchProduct); // Изменение продукта
router.delete("/admin/product/:id", productsController.deleteProduct); // Удаление продукта

module.exports = router;
