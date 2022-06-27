const jwt = require("jsonwebtoken");
const { SECRET_AccessToken } = require("../config/auth.config");

const verifyToken = (req, res, next) => {
  const tok = req.header('authorization');
  if(!tok) {
    return res.status(404).json({message:"Forbidden! You don't have permission to access this resource."})
  }
  try {
    const { username } = jwt.verify(tok,SECRET_AccessToken)
    req.username = username;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized!" });
  }
  
};

module.exports = verifyToken;
