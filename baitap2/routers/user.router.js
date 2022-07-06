const express = require("express");
const users = require("../controllers/user.controller");

const userRouter = express.Router();
userRouter.get('/',users.getAllUser)

module.exports = userRouter;
