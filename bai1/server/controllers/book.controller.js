const db = require("../models");

const Books = {
  getAllBooks: async (req, res) => {
    const booksAll = await db.Book.findAll();
    res.status(200).json({ message: "get all book success", booksAll });
  },
  getOneBook: async (req, res) => {
    const id = req.params.id;
    const found = await db.Book.findOne({ where: { id } });
    if (!found) {
      return res.status(404).json({ message: "data invalid" });
    }
    res
      .status(200)
      .json({ message: "get a book success", book: found.dataValues });
  },
  createOneBook: async (req, res) => {
    const data = req.body;
    const newBook = await db.Book.create({
      title: data.title,
      price: data.price,
      image: req.file.path,
    });
    res.status(201).json({ message: "create a book success", newBook });
  },
  updateOneBook: async (req, res) => {
    const id = req.params.id;
    const { title } = req.body;
    const found = await db.Book.findOne({ where: { id } });
    if (!found) {
      return res.status(404).json({ message: "data invalid" });
    }
    await db.Book.update(
      { title },
      { where: { title: found.dataValues.title } }
    );
    res.status(200).json({ message: "update a book success" });
  },
  deleteOneBook: async (req, res) => {
    const id = req.params.id;
    const found = await db.Book.findOne({ where: { id } });
    if (!found) {
      return res.status(404).json({ message: "data invalid" });
    }
    await db.Book.destroy({ where: { id: found.id } });
    res.status(200).json({ message: "delete a book success" });
  },
};

module.exports = Books;
