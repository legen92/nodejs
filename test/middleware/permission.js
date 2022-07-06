const { PERMISSION_ADMIN, PERMISSION_MODERATOR, PERMISSION_MEMBER } = require('../config/Permission.config');
const db = require('../models');
const Permission = {
    isAdmin:async(req,res,next) =>{
        const username = req.username
        const found = await db.User.findOne({
            where:{username}
        })
        if(found.iam_role !== PERMISSION_ADMIN) {
            return res.status(401).json({message: "You do not have this permission !"})
        }
        next()
    },
    isModerator:async(req,res,next) =>{
        const username = req.username
        const found = await db.User.findOne({
            where:{username}
        })
        if(found.iam_role !== PERMISSION_MODERATOR) {
            return res.status(401).json({message: "You do not have this permission !"})
        }
        next()
    },
    isMember:async(req,res,next) =>{
        const username = req.username
        const found = await db.User.findOne({
            where:{username}
        })
        if(found.iam_role !== PERMISSION_MEMBER) {
            return res.status(401).json({message: "You do not have this permission !"})
        }
        next()
    }
}
module.exports = Permission
