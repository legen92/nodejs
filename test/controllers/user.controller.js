const db = require("../models");

const userController = {
  getAllUser:async(req,res)=>{
    try {
      const userAll = await db.User.findAll()
      if(!userAll){
        res.status(404).json({message:"not found user"})
      }
      res.status(200).json(userAll)
    } catch (error) {
      res.status(500).json({message:error.message})
    }
    
  }
};

module.exports = userController;
