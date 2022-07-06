const db = require('../models/index')
const md5 = require("md5");
const jwt = require("jsonwebtoken");
const SECRET = require('../config/auth.config');

const Auth = {
  register: async (req, res) => {
    const { fullName, username, email, iam_role, password } = req.body;
    const newUser = {
      fullName,
      username,
      email,
      iam_role,
      hash_pwd: md5(password),
    };
    const found = db.Users.findOne({where:{username}})
    if(!found){
        res.status(404).json('data invalid')
    }
    try {
      await db.Users.create(newUser);
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
    const found = await db.Users.findOne({ where: { username } });

    const accessToken = jwt.sign(
      { username: found.dataValues.username },
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
