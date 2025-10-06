import User from "../Schemas/auth.schema.js";
export const SignupController=async(req,res)=>{
    try{
        const {name,email,password}=req.body;
        //validation
        if(!name || !email || !password){
            return res.status(400).json({message:"All fields are required"});
        }
        const userExists=await User.findOne({email});
        if(userExists){
            return res.status(400).json({message:"User already exists"});
        }
        const user=new User({
            name: name,
            email: email,
            password: password});
        await user.save();

        const userResponse={
            _id:user._id,
            name:user.name,
            email:user.email,
            createdAt:user.createdAt,
            updatedAt:user.updatedAt
        };
        if(user){
            return res.status(201).json({message:"User created successfully",user:userResponse});
        }
    }catch(err){
        res.status(500).json({message:err.message});
    }
}