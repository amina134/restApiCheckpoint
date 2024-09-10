const express=require("express")
const userRoute=express.Router()
const {addUser,getUser,updateUser,deleteUser}=require("../controllers/usercontrollers")

userRoute.use(express.json())
userRoute.post("/addUser",addUser)
userRoute.get("/getUser/:id",getUser)
userRoute.put("/updateUser/:id",updateUser)
userRoute.delete("/getUser/:id",deleteUser)
module.exports=userRoute