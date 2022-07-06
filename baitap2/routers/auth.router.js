const express = require("express");
const Auth = require("../controllers/auth.controller");
const checkSignUp = require("../middleware/checkSignUp");
const usernameNotExist = require("../middleware/usernameNotExist");
const validatePassword = require("../middleware/validatePassword");


const authRouter = express.Router();

authRouter.post("/register",checkSignUp,Auth.register);
authRouter.post("/login", usernameNotExist,validatePassword,Auth.login);


module.exports = authRouter;
