import { useState } from "react";
import { Link, useNavigate } from "react-router";
import axios from "axios";

const LoginPage=()=>{
    const navigate=useNavigate();
    let [formData,setFormData]=useState({
        email:"",
        password:""
    });
    const handleSubmit=async(e)=>{
        try{
        e.preventDefault();
        const response=await axios.post("http://localhost:4004/api/auth/login",formData);
        console.log(response.data);
        if(response.data.success){ 
            localStorage.setItem("token",response.data.token);  
            navigate("/");
        }
        }catch(err){
            console.log(err.message);
        }
    }
    return(
        <>
        <div className="p-16 px-96 ">
        <form onSubmit={handleSubmit}
        className="bg-zinc-600 mx-52 text-white flex flex-col gap-4 p-4 rounded w-80 h-96 ">
            <h2 className="flex justify-center font-bold text-2xl hover:underline">Login Page..</h2>
            <input onChange={(e)=>setFormData({...formData,email:e.target.value})} value={formData.email}
                className="p-2 px-8 border-2 rounded-md bg-zinc-500"
            type="email" placeholder="Enter Email"/>
            <input onChange={(e)=>setFormData({...formData,password:e.target.value})} value={formData.password}
                className="p-2 px-8 border-2 rounded-md bg-zinc-500"
            type="password" placeholder="Enter Password"/>
            <button type="submit"
                className="border-2 rounded-md my-4 p-2 bg-zinc-500 hover:bg-zinc-400 
                hover:font-bold hover:text-white hover:scale-105 "
            >Login</button> 
            <h3 className="p-2 px-8">dont you have an account?
                <Link to="/signup" className="underline hover:text-blue-300">Signup</Link>
            </h3>
        </form>
        </div>
        </>
    );
}
export default LoginPage