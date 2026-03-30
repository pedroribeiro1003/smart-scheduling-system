export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white text-black">
      
      <div className="text-center">
        
        <h1 className="text-3xl font-bold mb-2">
          Smart Scheduling
        </h1>

        <p className="text-gray-600 mb-6">
          Sistema de agendamento online
        </p>

        <a
          href="/booking"
          className="inline-block bg-black text-white px-6 py-3 rounded-lg hover:opacity-80 transition"
        >
          Ir para agendamento
        </a>

      </div>

    </main>
  );
}