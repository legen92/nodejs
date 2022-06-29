const express = require("express");
const db = require("../models/index");
const Books = require("../controllers/book.controller");
const verifyToken = require("../middleware/verifyToken");
const { faker } = require("@faker-js/faker");
const upload = require('../middleware/upload')

const bookRouter = express.Router();
// get all books
bookRouter.get("/", verifyToken, Books.getAllBooks);

//get one book

bookRouter.get("/:id", Books.getOneBook);

//create one book
bookRouter.post("/",upload.single('files'), Books.createOneBook);

//update one book
bookRouter.put("/:id", Books.updateOneBook);

//delete one book
bookRouter.delete("/:id", Books.deleteOneBook);

bookRouter.post("/fake", async(req, res) => {
  const arr = [];

  for (let i = 0; i < 10; i++) {
    const products = {
      title: faker.commerce.product(),
      image: faker.image.fashion(),
      price: faker.commerce.price(100, 200, 0, "$"),
    };
    arr.push(products);
  }
  const products = await db.Book.bulkCreate(arr)
  res.json(products);
});

module.exports = bookRouter;
