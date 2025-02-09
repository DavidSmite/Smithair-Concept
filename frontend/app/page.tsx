"use client"; // Permet d'utiliser useEffect côté client

import { useEffect, useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:5050/api/message")
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => console.error("Erreur API :", err));
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold">Bienvenue sur Smithair Concept 🚀</h1>
      <p className="text-lg mt-4">Votre boutique en ligne premium</p>
      <p className="mt-6 text-blue-600">{message}</p>
    </main>
  );
}
