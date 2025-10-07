import mongoose from "mongoose";
const Schema=mongoose.Schema;

const noteSchema=new Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    userId:{
        type:Schema.Types.ObjectId,
        ref:"User"
    }
},{timestamps:true});

const Note=mongoose.model("Note",noteSchema);
export default Note;