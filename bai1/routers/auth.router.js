const express = require("express");
const Auth = require("../controllers/auth.controller");
const usernameExist = require("../middleware/usernameExist");
const usernameNotExist = require("../middleware/usernameNotExist");
const validatePassword = require("../middleware/validatePassword");


const authRouter = express.Router();

authRouter.post("/register",usernameExist ,Auth.register);
authRouter.post("/login", usernameNotExist,validatePassword, Auth.login);

module.exports = authRouter;
