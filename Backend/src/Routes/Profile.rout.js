const {Router}=require("express")
const { Authenticate } = require("../middleware/Auth.middleweare")
const { BmiModel } = require("../model/Bmi.model")
const { UserModel } = require("../model/UserModel")

const ProfileRouter=Router()


ProfileRouter.get("/" ,Authenticate,async(req,res)=>{

const {user_id} = req.body
const user =await  UserModel.findOne({_id : user_id})
const {name, email} = user
res.send({name, email})
})


module.exports={ProfileRouter}