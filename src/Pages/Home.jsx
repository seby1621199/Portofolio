
import { useTheme } from "../Context/ThemeContext";

export default function Home() {
  const { dark } = useTheme();


  return (
    <section
      style={{
        display: "flex",
        alignItems: "center",
        minHeight: "60vh",
        padding: "2rem",
        color: dark ? "#f3f4f6" : "#18181b",
        transition: "background 0.3s, color 0.3s"
      }}
    >
      <div style={{ flex: "0 0 200px", marginRight: "2rem" }}>
        <h1 className="name">Sebastian</h1>
        <img
          src={
            "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/712020:210729ab-0337-4d27-a824-3056d6b8a172/ab4258b9-8b3c-4cde-9e2e-1111acf2b227/128"
          }
          alt="Profile"
          style={{ width: "200px", borderRadius: "50%" }}
        />
      </div>
      <div>
        <h1 style={{ marginBottom: "1rem" }}>Salut!</h1>
        <p style={{ fontSize: "1.2rem", maxWidth: "500px" }}>
          Eu sunt Sebastian! Sunt pasionat de dezvoltare web și React. Îmi place să creez aplicații moderne, rapide și ușor de folosit. Bine ai venit pe pagina mea!
        </p>
      </div>
    </section>
  );
}
