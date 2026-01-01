import { Link, useNavigate } from "react-router-dom";
import { FaUserCircle, FaHotel, FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    alert("Logged out successfully!");
    navigate("/login");
    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gray-900/90 backdrop-blur-md shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center text-white">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 text-2xl font-bold">
          <FaHotel className="text-yellow-400" />
          Dev Heritage Stay
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link to="/" className="hover:text-yellow-400">Home</Link>
          <Link to="/rooms" className="hover:text-yellow-400">Rooms</Link>
          <Link to="/services" className="hover:text-yellow-400">Services</Link>
          <Link to="/contact" className="hover:text-yellow-400">Contact</Link>

          {currentUser ? (
            <div className="flex items-center gap-3 ml-3">
              {currentUser.photo ? (
                <img
                  src={currentUser.photo}
                  alt={currentUser.name}
                  className="w-8 h-8 rounded-full object-cover border-2 border-yellow-400"
                />
              ) : (
                <FaUserCircle size={28} className="text-yellow-400" />
              )}
              <span>{currentUser.name}</span>
              <button
                onClick={handleLogout}
                className="bg-red-500 px-3 py-1 rounded hover:bg-red-600"
              >
                Logout
              </button>
            </div>
          ) : (
            <>
              <Link to="/login" className="hover:text-yellow-400">Login</Link>
              <Link to="/register" className="bg-yellow-400 text-black px-4 py-1 rounded hover:bg-yellow-500">
                Register
              </Link>
            </>
          )}
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-900 text-white px-6 py-4 space-y-4">
          <Link to="/" onClick={() => setMenuOpen(false)} className="block hover:text-yellow-400">Home</Link>
          <Link to="/rooms" onClick={() => setMenuOpen(false)} className="block hover:text-yellow-400">Rooms</Link>
          <Link to="/services" onClick={() => setMenuOpen(false)} className="block hover:text-yellow-400">Services</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)} className="block hover:text-yellow-400">Contact</Link>

          {currentUser ? (
            <div className="flex items-center gap-3 pt-3 border-t border-gray-700">
              <FaUserCircle size={26} className="text-yellow-400" />
              <span>{currentUser.name}</span>
              <button
                onClick={handleLogout}
                className="ml-auto bg-red-500 px-3 py-1 rounded"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex gap-4 pt-3 border-t border-gray-700">
              <Link to="/login" onClick={() => setMenuOpen(false)}>Login</Link>
              <Link
                to="/register"
                onClick={() => setMenuOpen(false)}
                className="bg-yellow-400 text-black px-3 py-1 rounded"
              >
                Register
              </Link>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
