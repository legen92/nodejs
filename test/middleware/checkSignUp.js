const { Op } = require("sequelize");
const db = require("../models");

const checkSignUp = async(req, res, next) => {
    const data = req.body
    const found = await db.User.findOne({
        where:{
            [Op.or]:[{username:data.username},{email:data.email}]
        }
    })
    if(found){
        return res.status(400).json({message:"Cannot sign-up with the username or email already existed"})
    }
    next()
};

module.exports = checkSignUp;
