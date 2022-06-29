const db = require("../models");

const usernameNotExist = async (req, res, next) => {
  const { username } = req.body;
  try {
    const found = await db.Users.findOne({ where: { username } });
    if (!found) {
      return res.status(400).json({ message: "username invalid" });
    }
    next();
  } catch (error) {
    return res.status(500).json({ message: "server error" });
  }
};
module.exports = usernameNotExist;
