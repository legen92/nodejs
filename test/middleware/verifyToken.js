const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../config/auth.config");

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  if (!token) {
    return res
      .status(403)
      .json({ message: "Forbidden! Requires a token to access" });
  }
  try {
    const decode = jwt.verify(token, SECRET_KEY);
    req.username = decode.username;
    next();
  } catch (error) {
    res.status(500).json({message:error.message})
  }
};

module.exports = verifyToken;
