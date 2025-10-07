import express from "express";
import dotenv from "dotenv";
import connectDB from "./DB/connectDB.js";
import authRoutes from "./routes/auth.routes.js";
import notesRoutes from "./routes/note.route.js";
import cors from "cors";
dotenv.config();
const app=express();
const PORT=process.env.PORT || 4004;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    res.send("Welcome to Backend Server..");
});

app.use("/api/auth",authRoutes);
app.use("/api/notes",notesRoutes);

connectDB().then(()=>{
    console.log("Connected to DB successfully");
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});
}).catch((err)=>{
    console.log("Error connecting to DB:",err.message);
});