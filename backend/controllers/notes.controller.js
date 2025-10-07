
import Note from "../Schemas/note.schema.js";

export const createNote=async(req,middleware,res)=>{
    try{
    const {title,description}=req.body;
    if(!title || !description){
        return res.status(400).json({message:"Title and Description are required"});
    }
    const newNote=new Note({
        title,
        description,        
        userId:req.user._id
    });
    newNote.save();
}
catch(err){
    res.status(500).json({message:err.message});
}
};

