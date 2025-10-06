import { useState } from "react";
import { Link } from "react-router";
import axios from "axios";

const SignupPage=()=>{
    let [formData,setFormData]=useState({
        name:"",
        email:"",
        password:""
    });
    const handleSubmit=async(e)=>{
        try{
        e.preventDefault();
        const response=await axios.post("http://localhost:4004/api/auth/signup",formData);
        console.log(response.data);
        }catch(err){
            console.log(err.message);
        }
    }
    return(
        <>
        <div className="p-16 px-96 ">
        <form onSubmit={handleSubmit}
        className="bg-zinc-600 mx-52 text-white flex flex-col gap-4 p-4 rounded w-80 h-96 ">
            <h2 className="flex justify-center font-bold text-2xl hover:underline">Signup Page..</h2>
            <input value={formData.name} onChange={(e)=>setFormData({...formData,name:e.target.value})} 
                className="p-2 px-8 border-2 rounded-md bg-zinc-500"
            type="text" placeholder="Enter Full Name"/>   
            <input onChange={(e)=>setFormData({...formData,email:e.target.value})} value={formData.email}
                className="p-2 px-8 border-2 rounded-md bg-zinc-500"
            type="email" placeholder="Enter Email"/>
            <input onChange={(e)=>setFormData({...formData,password:e.target.value})} value={formData.password}
                className="p-2 px-8 border-2 rounded-md bg-zinc-500"
            type="password" placeholder="Enter Password"/>
            <button type="submit"
                className="border-2 rounded-md my-4 p-2 bg-zinc-500 hover:bg-zinc-400 
                hover:font-bold hover:text-white hover:scale-105 "
            >Signup</button> 
            <h3 className="p-2 px-8">Already have an account?
                <Link to="/LoginPage" className="underline hover:text-blue-300">Login</Link>
            </h3>
        </form>
        </div>
        </>
    );
}
export default SignupPage