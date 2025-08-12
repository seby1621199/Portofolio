//import { useEffect } from "react";
import { useTheme } from "../Context/ThemeContext";

export default function ProjectCard({ name, language, url }) {
  const { dark } = useTheme();

  return (
    <div style={{ backgroundColor: dark ? "#1E3A8A" : "#F9FAFB" }}
    className="card bg-gradient-to-br from-blue-100 via-white to-blue-50 rounded-2xl shadow-lg p-6 mb-8 flex flex-col items-start border-2 border-blue-400">
      <h2 className="text-xl font-bold text-blue-700 mb-2 tracking-wide">
        {name}
      </h2>
      <span className="inline-block bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold mb-6 shadow">
        {language || "N/A"}
      </span>
      <div className="mt-4">
        <a
          style={{ color: dark ? "#b4b4b4ff" : "#414345ff" }}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-5 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-800 transition"
        >
          Vezi pe GitHub
        </a>
      </div>
    </div>
  );
}
