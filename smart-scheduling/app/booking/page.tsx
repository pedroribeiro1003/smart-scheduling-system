"use client";

import { useState } from "react";

export default function Booking() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [confirmed, setConfirmed] = useState(false);

  function handleSubmit(e: any) {
    e.preventDefault();
    setConfirmed(true);
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100">
      {!confirmed ? (
        <div className="bg-white p-10 rounded-2xl shadow-xl w-96">
          
          <h1 className="text-3xl font-semibold mb-2 text-black text-center">
            Agendar horário
          </h1>

          <p className="text-sm text-gray-600 mb-6 text-center">
            Preencha as informações abaixo
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">

            <div>
              <label className="text-sm text-gray-800 mb-1 block">
                Nome
              </label>
              <input
                type="text"
                placeholder="Digite seu nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-3 bg-gray-50 border border-gray-400 rounded-lg text-black placeholder-gray-500 focus:outline-none focus:border-black"
              />
            </div>

            <div>
              <label className="text-sm text-gray-800 mb-1 block">
                Data
              </label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full p-3 bg-gray-50 border border-gray-400 rounded-lg text-black focus:outline-none focus:border-black"
              />
            </div>

            <div>
              <label className="text-sm text-gray-800 mb-1 block">
                Horário
              </label>
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full p-3 bg-gray-50 border border-gray-400 rounded-lg text-black focus:outline-none focus:border-black"
              />
            </div>

            <button className="mt-4 bg-black text-white p-3 rounded-lg hover:bg-gray-800 transition font-medium">
              Confirmar agendamento
            </button>
          </form>
        </div>
      ) : (
        <div className="bg-white p-8 rounded-2xl shadow-xl text-center">
          <h2 className="text-xl font-semibold mb-4">
            Agendamento confirmado
          </h2>
          <p className="text-gray-800">Nome: {name}</p>
          <p className="text-gray-800">Data: {date}</p>
          <p className="text-gray-800">Hora: {time}</p>
        </div>
      )}
    </main>
  );
}