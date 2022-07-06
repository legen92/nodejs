const db = require("../models");

const productController = {
  getAllProduct: async (req, res) => {
    const UserId = req.params.userId;
    try {
      const allProduct = await db.Products.findAll({ where: { UserId } });

      res.status(200).json(allProduct);
    } catch (error) {
      res.status(500).json({message:error.message})
    }
  },
  newProduct: async(req, res) => {
    const UserId = req.params.userId;
    const {productName,CategoryId} = req.body
    try {
      const newProduct = await db.Products.create({UserId,productName,CategoryId})
      res.status(201).json({message:"created new products successfully",newProduct})
    } catch (error) {
      res.status(500).json({message:error.message})
    }
  },
};

module.exports = productController;
