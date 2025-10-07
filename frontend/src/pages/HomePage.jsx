import React, { useState } from "react";
import Navbar from "../components/Navbar.jsx";
import { Plus } from "lucide-react"; // for plus icon
import CreateNote from "../pages/reateNotePage.jsx"; // optional if you add modal

function HomePage() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Navbar />

      {/* Floating + Button (bottom-right) */}
      <button
        onClick={() => setShowModal(true)}
        className="fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition-transform hover:scale-110"
      >
        <Plus size={28} />
      </button>

      {/* Optional Create Note Modal */}
      {showModal && <CreateNote onClose={() => setShowModal(false)} onSave={(n) => console.log(n)} />}
    </>
  );
}

export default HomePage;
