import jwt from "jsonwebtoken";
import User from "../Schemas/auth.schema.js";
import dotenv from "dotenv";
dotenv.config();
const JWT_SECRET=process.env.JWT_SECRET;

const middleware=(req,res,next)=>{
    try{
         const token=req.headers.authorization.split(" ")[1];
    if(!token){
        return res.status(401).json({message:"No token provided"});
    }

    const decoded=jwt.verify(token,JWT_SECRET);
    if(!decoded){
        return res.status(401).json({message:"Invalid token"});
    }
    const user=User.findById(decoded.id);
    if(!user){
        return res.status(401).json({message:"User not found"});
    }
    const newUser={name:user.name,id:user._id};
    req.user=newUser;
    next();
    }catch(err){
    res.status(500).json({message:err.message});
}
   
}

export default middleware;
