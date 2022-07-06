const db = require("../models");
const { Op } = require("sequelize");

const checkSignUp = async (req, res, next) => {
  const { username, email } = req.body;
  try {
    const found = await db.Users.findAll({
      where: {
        [Op.or]: [{ username: username }, { email: email }],
      },
    });
    if (found) {
      return res
        .status(400)
        .json({ message: "Cannot sign-up with the username or email already existed" });
    }
    next();
  } catch (error) {
    return res.status(500).json({ message: "server error" });
  }
};
module.exports = checkSignUp;
