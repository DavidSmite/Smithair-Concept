"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [randomNumber, setRandomNumber] = useState<string | null>(null);
  const [currentTime, setCurrentTime] = useState<string | null>(null);

  useEffect(() => {
    setRandomNumber(Math.random().toFixed(2)); // Généré uniquement côté client
    setCurrentTime(new Date().toLocaleTimeString()); // Généré uniquement côté client
  }, []);

  console.log("✅ Le composant Home est bien rendu !");
  console.log("🔢 Nombre aléatoire généré :", randomNumber);
  console.log("⏰ Heure actuelle :", currentTime);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600">
        🚀 Smithair Concept est bien chargé !
      </h1>
      <p className="text-gray-500 mt-4">
        🔢 Nombre aléatoire : {randomNumber || "Chargement..."}
      </p>
      <p className="text-gray-500 mt-4">
        ⏰ Heure actuelle : {currentTime || "Chargement..."}
      </p>
    </div>
  );
}
