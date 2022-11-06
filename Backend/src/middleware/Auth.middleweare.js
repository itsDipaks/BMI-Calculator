
var jwt = require('jsonwebtoken');
require("dotenv").config()

const Authenticate=(req,res,next)=>{
const token=req.headers.token
var decoded = jwt.verify(token, process.env.PRIVATE_KEY);

const user_id=decoded.user_id
console.log(user_id)
if(decoded){
    req.body.user_id=user_id
    next()

}
}
module.exports={Authenticate}


