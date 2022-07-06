const express = require("express");
const verifyToken = require("../middleware/verifyToken");

const productsRouter = express.Router();

productsRouter.get("/:userId/products", verifyToken);

module.exports = productsRouter;
