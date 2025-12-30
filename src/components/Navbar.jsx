import { Link, useNavigate } from "react-router-dom";
import { FaUserCircle, FaHotel } from "react-icons/fa";

const Navbar = () => {
  const navigate = useNavigate();
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    alert("Logged out successfully!");
    navigate("/login");
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gray-900/90 backdrop-blur-md shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center text-white">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 text-2xl font-bold">
          <FaHotel className="text-yellow-400" />
          Dev Heritage Stay
        </Link>

        {/* Links */}
        <div className="flex items-center gap-6 text-sm font-medium">
          <Link to="/" className="hover:text-yellow-400 transition">Home</Link>
          <Link to="/rooms" className="hover:text-yellow-400 transition">Rooms</Link>
          <Link to="/services" className="hover:text-yellow-400 transition">Services</Link>
          <Link to="/contact" className="hover:text-yellow-400 transition">Contact</Link>

          {/* User Section */}
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
                className="bg-red-500 px-3 py-1 rounded hover:bg-red-600 transition"
              >
                Logout
              </button>
            </div>
          ) : (
            <>
              <Link to="/login" className="hover:text-yellow-400 transition">Login</Link>
              <Link to="/register" className="bg-yellow-400 text-black px-4 py-1 rounded hover:bg-yellow-500 transition">
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
