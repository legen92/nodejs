const db = require("../models/index");

const users = {
  getAllUser: async (req, res) => {
    const userAll = await db.Users.findAll();
    res.status(200).json({ message: "get all book success", userAll });
  },
};

module.exports = users;
