import { useState } from "react";
import { useTheme } from "../Context/ThemeContext";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const { dark } = useTheme();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Trimis!\nNume: ${name}\nEmail: ${email}\nMesaj: ${message}`);
  };

  return (
    <div
      className="contact-form-container min-h-[60vh] flex flex-col items-center justify-center px-4 py-8"
      style={{
        background: dark
          ? "linear-gradient(135deg, #101018 0%, #393939 60%, #27456d 100%)"
          : "white",
        color: dark ? "#f3f4f6" : "#18181b",
        borderRadius: "1rem",
        boxShadow: dark
          ? "0 4px 24px 0 rgba(39,69,109,0.2)"
          : "0 4px 24px 0 rgba(39,69,109,0.08)"
      }}
    >
      <h1 className="contact-form-title text-2xl font-bold mb-6">Contactează-mă</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full max-w-md">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="contact-form-label font-semibold">Nume</label>
          <input
            id="name"
            type="text"
            placeholder="Nume complet"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="contact-form-input px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="contact-form-label font-semibold">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Adresa de email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="contact-form-input px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="contact-form-label font-semibold">Mesaj</label>
          <textarea
            id="message"
            placeholder="Scrie mesajul tău..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="contact-form-textarea px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 min-h-[120px]"
            required
          />
        </div>
        <button
          type="submit"
          className="contact-form-button bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition-colors"
        >
          Trimite mesajul
        </button>
      </form>
    </div>
  );
}
