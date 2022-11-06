const express = require("express");
const { connection } = require("./config/db");
const { CalculateBMIRouter } = require("./Routes/CalculateBmi.rout");
const { GetHistoryRouter } = require("./Routes/GetHistory.rout");
const { LoginRouter } = require("./Routes/Login.rout");
const { ProfileRouter } = require("./Routes/Profile.rout");
const { SignupRouter } = require("./Routes/Signup.rout");
var cors = require('cors')
const app = express();



app.use(cors())
app.use(express.json());
app.use("/login",LoginRouter)
app.use("/signup",SignupRouter)
app.use("/profile",ProfileRouter)
app.use("/bmicalculator",CalculateBMIRouter)
app.use("/bmihistory",GetHistoryRouter)




app.listen(8500, async () => {
  try {
await connection
console.log("Database Connected")

    console.log("http://localhost:8500")
  }
   catch (error) {
    console.log("Error in Connections",error);
    
  }
});
