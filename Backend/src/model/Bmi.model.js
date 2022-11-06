const mongoose=require("mongoose")

const BmiSchema=mongoose.Schema({
    height:{type:String,required:true},
    weight:{type:Number},
    BMI:{type:String,required:true},
    user_id:{type:String,required:true}
},{timestamps:true})
const BmiModel=new mongoose.model("BMIdata",BmiSchema)
module.exports={BmiModel}