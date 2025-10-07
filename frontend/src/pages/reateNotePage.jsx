import { useState } from "react";
import { X } from "lucide-react"; // for cross icon
import axios from "axios";
import { useNavigate } from "react-router";

const CreateNote = ({ onClose, onSave }) => {
  const navigate=useNavigate();
  const [note, setNote] = useState({
    title: "",
    description: "",
  });

  const handleSubmit =async (e) => {
    e.preventDefault();
    onSave(note);
    const response= await axios.post("http://localhost:4004/api/notes/add",
      note,
      {
        headers:{
          Authorization:`Bearer ${localStorage.getItem("token")}`
        }
      });
      console.log(response.data);
      if(response.data.success){
        navigate("/");
        onClose();
      }else{
        console.log("Error creating note:",response.data.message);
      }
    
  };

  return (
    // Background overlay (blurred)
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50">
      {/* Modal container */}
      <div className="bg-zinc-800 text-white w-1/2 p-6 rounded-2xl shadow-lg relative animate-fadeIn">
        {/* Cross button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <X size={24} />
        </button>

        <h2 className="text-2xl font-bold mb-6 text-center">Create Note</h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Enter Note Title"
            value={note.title}
            onChange={(e) => setNote({ ...note, title: e.target.value })}
            className="p-3 rounded-md bg-zinc-700 border border-zinc-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <textarea
            rows="5"
            placeholder="Enter Description"
            value={note.description}
            onChange={(e) => setNote({ ...note, description: e.target.value })}
            className="p-3 rounded-md bg-zinc-700 border border-zinc-600 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
            required
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-md transition-transform hover:scale-105"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateNote;
