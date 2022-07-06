const jwt = require("jsonwebtoken");
const md5 = require("md5");
const { RS256, SECRET_KEY } = require("../config/auth.config");
const db = require("../models");
const sendEmail = require("../services/email.service");

const authController = {
  signup: async (req, res) => {
    const { fullName, username, email, iam_role, password } = req.body;
    const hash_pwd = md5(password);
    try {
      const newUser = await db.User.create({
        fullName,
        username,
        email,
        iam_role,
        hash_pwd,
      });
      delete newUser.hash_pwd;
      sendEmail(
        email,
        "Register Successfully",
        "Congratulations, you have successfully registered"
      );
      res.status(200).json({ message: "created successfully", newUser });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  signin: async (req, res) => {
    const { username, password } = req.body;
    const pwd = md5(password);
    try {
      const found = await db.User.findOne({ where: { username } });
      if (!found) {
        return res.status(404).json("invalid username");
      }
      if (pwd !== found.hash_pwd) {
        return res.status(404).json("password invalid");
      }
      const token = jwt.sign(
        {
          username: found.username,
          fullName: found.fullName,
          email: found.email,
          iam_role: found.iam_role,
        },
        SECRET_KEY,
        { expiresIn: "1d" },
        { algorithm: RS256 }
      );
      res.status(200).json({ message: "Login successfully", token });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

module.exports = authController;
