const {Router} = require("express");
const LoginRouter = Router();
const bcrypt = require("bcrypt");
const {UserModel} = require("../model/UserModel");
require("dotenv").config();
var jwt = require("jsonwebtoken");

const key = process.env.PRIVATE_KEY;


LoginRouter.post("/", async (req, res) => {
  const {email, password} = req.body;
  const user = await UserModel.findOne({email});
  const hased_password = user.password;
  const user_id = user._id;
  bcrypt.compare(password, hased_password, function (err, result) {
    if (result) {
      var token = jwt.sign({user_id}, key);
      res.send({msg: "User Login Sucessfully", token: token});
    } else {
      res.send("Login faild");
    }
  });
});

module.exports = {LoginRouter};
