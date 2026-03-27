import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">
        Smart Scheduling System
      </h1>

      <p className="text-lg text-gray-600 mb-6">
        Sistema de agendamento moderno
      </p>

      <Link href="/booking">
        <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800">
          Agendar agora
        </button>
      </Link>
    </main>
  );
}
