
import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-zinc-900/80 backdrop-blur-md shadow-md text-white z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        
        {/* Left - Brand */}
        <div className="text-2xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 cursor-pointer hover:scale-105 transition-transform duration-300">
         <Link to="/">
          SRZNOTES
           </Link>
        </div>

        {/* Center - Search */}
        <div className="flex-grow flex justify-center">
          <input
            type="text"
            placeholder="Search notes..."
            className="w-1/2 px-4 py-2 rounded-full bg-zinc-800 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
          />
        </div>

        {/* Right - Buttons + Name */}
        <div className="flex items-center gap-4">
          <Link
            to="/login"
            className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 transition-all duration-300 font-semibold shadow-md hover:shadow-lg"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 font-semibold shadow-md hover:shadow-lg"
          >
            Signup
          </Link>
          <p className="font-semibold text-lg text-gray-300 hover:text-white transition-all duration-300">
            Aniket Singh
          </p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
