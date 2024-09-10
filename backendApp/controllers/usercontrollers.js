
const userSchema =require ("../model/user")


const addUser=async(req,res)=>{
    try {
        const newuser=new userSchema(req.body)
        await newuser.save()
        res.status(200).json({ message: 'User added successfully', newuser });
    } catch (error) {
        res.status(500).json({ message: 'Error adding user', error });
    }
}
const getUser=async(req,res)=>{
    try {
       const user=req.params.nody
       const getit=userSchema.findById(user)
       
        res.status(200).json({ message: 'User retrieved successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error getting user', error });
    }
}

const updateUser=async(req,res)=>{
    try {
       const user=req.params.nody
       const getit=userSchema.findByIdAndUpdate(user)
       
        res.status(200).json({ message: 'User updated successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error getting user', error });
    }
}
const deleteUser=async(req,res)=>{
    try {
       const user=req.params.nody
       const getit=userSchema.findByIdAndDelete(user)
       
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error getting user', error });
    }
}




module.exports={addUser,getUser,updateUser,deleteUser}