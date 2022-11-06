const {Router}=require("express")
const { Authenticate } = require("../middleware/Auth.middleweare")
const { BmiModel } = require("../model/Bmi.model")

const CalculateBMIRouter=Router()

CalculateBMIRouter.post("/",Authenticate, async(req,res)=>{

    const {height,weight,user_id}=req.body
    const heightinm=height*0.3048

    const BMI=weight/heightinm**2
    const data= new BmiModel({

        height:heightinm,weight,BMI,user_id
    })
    await data.save()
res.send({msg:"Data Added",BMI})
})
module.exports={CalculateBMIRouter}