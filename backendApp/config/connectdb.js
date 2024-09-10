const mongoose=require("mongoose")

const connectdb=async ()=>{
    try {
       await mongoose.connect(process.env.uri)
       console.log("connecting to data base")
    } catch (error) {
        console.error(error)
    }
}
module.exports=connectdb