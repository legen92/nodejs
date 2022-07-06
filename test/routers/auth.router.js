const express = require("express");
const authController = require("../controllers/auth.controller");
const checkSignUp = require("../middleware/checkSignUp");

const authRouter = express.Router();

authRouter.post("/signup",checkSignUp, authController.signup);
authRouter.post("/signin", authController.signin);

module.exports = authRouter;
