const express=require("express")
const app=express()

require("dotenv").config()
const port=process.env.port
// exporting the user
const user=require("./model/user")
const connectdb=require("./config/connectdb")
const userRoute=require("./routes/userRouts")
connectdb()

app.use(express.json())
app.use('/user',userRoute)
app.listen(port,()=>{
    console.log(`server is running on ${port}`)
})