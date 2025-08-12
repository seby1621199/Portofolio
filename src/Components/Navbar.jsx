import { useTheme } from "../Context/ThemeContext";
import { Link } from "react-router-dom";

export default function Navbar() {
  const { dark, toggleTheme } = useTheme();

  return (
    <nav
      className="navbar"
      style={{ backgroundColor: dark ? "#1a202c" : "#fff", color: dark ? "#fff" : "#1a202c" }}
    >
      <div className="flex">
        <Link
          to="/"
          style={{ color: dark ? "#90cdf4" : "#2563eb" }}
          className="nav-link"
        >
          Home
        </Link>
        <Link
          to="/contact"
          style={{ color: dark ? "#90cdf4" : "#2563eb" }}
          className="nav-link"
        >
          Contact
        </Link>
        <Link
          to="/project"
          style={{ color: dark ? "#90cdf4" : "#2563eb" }}
          className="nav-link"
        >
          Projects
        </Link>
        <button
          onClick={toggleTheme}
          style={{ backgroundColor: dark ? "#2d3748" : "#bfdbfe", color: dark ? "#fff" : "#1e40af" }}
          className="nav-btn"
        >
          {dark ? "Dark" : "Light"}
        </button>
      </div>
    </nav>
  );
}
