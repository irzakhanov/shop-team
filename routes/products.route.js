const { Router } = require("express");
const { productsController } = require("../controllers/products.controller");

const router = Router();

router.post("/", productsController.addProduct); // Добавление продукта
router.get("/", productsController.getAllProduct); // Вывод всех продуктов
router.get("/:id", productsController.getProductByID); // Вывод продукта по ID
router.patch("/:id", productsController.patchProduct); // Изменение продукта
router.delete("/:id", productsController.deleteProduct); // Удаление продукта

module.exports = router;
