export default function Home() {
  return (
    <main style={{
      display: "flex",
      height: "100vh",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <div style={{ textAlign: "center" }}>
        <h1>Smart Scheduling System</h1>
        <p>Sistema de agendamento online</p>

        <a href="/booking" style={{ color: "blue" }}>
          Ir para agendamento
        </a>
      </div>
    </main>
  );
}