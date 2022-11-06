const {Router} = require("express");

const SignupRouter = Router();
const bcrypt = require("bcrypt");
const {UserModel} = require("../model/UserModel");

SignupRouter.post("/", async (req, res) => {
  const {email, password, name} = req.body;

  const userExist = await UserModel.findOne({email});

  if (userExist) {
    res.send("User Already exist please Login ");
  } else {
    bcrypt.hash(password, 4, async function (err, hashedpassword) {
      if (err) {
        res.send("something went wrong please try againbbbbb");
      } else {
        const user = new UserModel({
          name,
          email,
          password: hashedpassword,
        });
        user.save();
        res.send("user Signup sucessfully");
      }
    });
  }
});

module.exports = {SignupRouter};
