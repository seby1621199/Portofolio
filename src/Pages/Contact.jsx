import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Trimis!\nNume: ${name}\nEmail: ${email}\nMesaj: ${message}`);
  };

  return (
    <div className="contact-form-container">
      <h1 className="contact-form-title">Contactează-mă</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="name"
            className="contact-form-label"
          >
            Nume
          </label>
          <input
            id="name"
            type="text"
            placeholder="Nume complet"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="contact-form-input"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="email"
            className="contact-form-label"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Adresa de email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="contact-form-input"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="message"
            className="contact-form-label"
          >
            Mesaj
          </label>
          <textarea
            id="message"
            placeholder="Scrie mesajul tău..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="contact-form-textarea"
            required
          />
        </div>
        <button
          type="submit"
          className="contact-form-button"
        >
          Trimite mesajul
        </button>
      </form>
    </div>
  );
}
