const express = require("express");
const productController = require("../controllers/product.controller");
const Permission = require("../middleware/permission");
const verifyToken = require("../middleware/verifyToken");


const productRouter = express.Router();

productRouter.get('/:userId/products',verifyToken,Permission.isAdmin,productController.getAllProduct)
productRouter.post('/:userId/products',verifyToken,Permission.isAdmin,productController.newProduct)


module.exports = productRouter;
