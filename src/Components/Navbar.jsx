import { useTheme } from "../Context/ThemeContext";
import { Link } from "react-router-dom";

export default function Navbar() {
  const { dark, toggleTheme } = useTheme();

  return (
    <nav
      className="navbar"
      style={{ backgroundColor: dark ? "#1a202c" : "#fff", color: dark ? "#fff" : "#1a202c" }}
    >
      <div className="flex flex-nowrap justify-around items-center">
        <Link
          to="/"
          style={{ color: dark ? "#90cdf4" : "#2563eb" }}
          className="px-4 py-2 rounded-lg font-medium hover:bg-blue-100 hover:text-blue-900 transition-all duration-200"
        >
          Home
        </Link>
        <Link
          to="/contact"
          style={{ color: dark ? "#90cdf4" : "#2563eb" }}
          className="px-4 py-2 rounded-lg font-medium hover:bg-blue-100 hover:text-blue-900 transition-all duration-200"
        >
          Contact
        </Link>
        <Link
          to="/project"
          style={{ color: dark ? "#90cdf4" : "#2563eb" }}
          className="px-4 py-2 rounded-lg font-medium hover:bg-blue-100 hover:text-blue-900 transition-all duration-200"
        >
          Projects
        </Link>
        <button
          onClick={toggleTheme}
          style={{ backgroundColor: dark ? "#2d3748" : "#bfdbfe", color: dark ? "#fff" : "#1e40af" }}
          className="ml-6 px-4 py-2 rounded-lg font-semibold transition-all duration-200"
        >
          {dark ? "Dark" : "Light"}
        </button>
      </div>
    </nav>
  );
}
