const {Router}=require("express")
const { Authenticate } = require("../middleware/Auth.middleweare")
const { BmiModel } = require("../model/Bmi.model")

const GetHistoryRouter=Router()

GetHistoryRouter.get("/",Authenticate,async(req,res)=>{
    const {user_id}=req.body
    try{

        const historybmi=await BmiModel.find({user_id})
        res.send(historybmi)
    }catch(err){
res.send(err)
    }
})

module.exports={GetHistoryRouter}
