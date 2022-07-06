const jwt = require("jsonwebtoken");
const { SECRET_AccessToken } = require("../config/auth.config");


const verifyToken = (req, res, next) => {
  const tok = req.header('authorization');
  if(!tok) {
    return res.status(403).json({message:"Forbidden! Requires a token to access."})
  }
  try {
    const token = jwt.verify(tok,SECRET_AccessToken)
    next();
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized!" });
  }
  
};

module.exports = verifyToken;
