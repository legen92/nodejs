const db = require("../models");
const md5 = require("md5");
const jwt = require("jsonwebtoken");
const SECRET = require("../config/auth.config");

const Auth = {
  register: async (req, res) => {
    const { username, password } = req.body;
    const newUser = {
      username,
      password: md5(password),
    };
    try {
      await db.User.create(newUser);
      res.status(201).json({
        message: " created successfully",
        newUser,
      });
    } catch (error) {
      res.status(500).json({ message: "server error" });
    }
  },
  login: async (req, res) => {
    const { username } = req.body;
    const found = await db.User.findOne({ where: { username } });

    const accessToken = jwt.sign(
      
      { username: found.dataValues.username,
        role:found.dataValues.role
        },
      SECRET.SECRET_AccessToken,
      {
        expiresIn: "1d",
      }
    );
    res.status(200).json({
      message: "login success",
      accessToken,
    });
  },
};

module.exports = Auth;
