import User from "../Schemas/auth.schema.js";
import jwt from "jsonwebtoken";

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
            return res.status(201).json({success:true,message:"User created successfully",user:userResponse});
        }
    }catch(err){
        res.status(500).json({message:err.message});
    }
}

export const LoginController=async(req,res)=>{
    try{
        const {email,password}=req.body;
        //validation
        if(!email || !password){
            return res.status(400).json({message:"All fields are required"});
        }
        const user=await User.findOne({email});
        if(!user){
            return res.status(400).json({message:"User does not exist"});
        }
          const isMatch = await user.comparePassword(password);
        if (!isMatch) {
        return res.status(400).json({ message: "Invalid credentials" });
    }
        const token=jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:"1d"});
        const userResponse={
            _id:user._id,
            name:user.name,
            email:user.email,
            createdAt:user.createdAt,
            updatedAt:user.updatedAt
        };
        return res.status(200).json({ success:true,message:"User logged in successfully",user:userResponse,token});
    }catch(err){
        res.status(500).json({message:err.message});
    }

}