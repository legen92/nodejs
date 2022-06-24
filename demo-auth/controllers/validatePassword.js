const db = require("../models");
const md5 = require('md5')

const validatePassword = async (req, res, next) => {
  const { username,password } = req.body;
  const ecriptedpwd = md5(password)
  try {
    const found = await db.User.findOne({ where: { username } });
    if(found.password != ecriptedpwd) {
        return res.status(400).json({message: 'invalid password'})
    }
    next();
  } catch (error) {
    return res.status(500).json({ message: "server error" });
  }
};
module.exports = validatePassword;
