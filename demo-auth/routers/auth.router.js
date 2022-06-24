const express = require("express");
const Auth = require("../controllers/auth.controller");
const usernameExist = require("../controllers/usernameExist");
const usernameNotExist = require("../controllers/usernameNotExist");
const validatePassword = require("../controllers/validatePassword");

const authRouter = express.Router();

authRouter.post("/register",usernameExist ,Auth.register);
authRouter.post("/login", usernameNotExist,validatePassword, Auth.login);

module.exports = authRouter;
