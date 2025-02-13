"use client";

import { useEffect, useState } from "react";

export default function Home() {
  // Initialisation sans valeur dynamique pour éviter les erreurs d'hydratation
  const [randomNumber, setRandomNumber] = useState<string | null>(null);
  const [currentTime, setCurrentTime] = useState<string | null>(null);
  const [isClient, setIsClient] = useState(false); // Vérifie si le rendu est côté client

  useEffect(() => {
    setIsClient(true); // Active le rendu uniquement côté client
    setRandomNumber(Math.random().toFixed(2)); // Génère un nombre aléatoire uniquement côté client
    setCurrentTime(new Date().toLocaleTimeString()); // Met à jour l'heure uniquement côté client
  }, []);

  console.log("✅ Le composant Home est bien rendu !");
  console.log("🔢 Nombre aléatoire généré :", randomNumber);
  console.log("⏰ Heure actuelle :", currentTime);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold text-blue-600 text-center">
        🚀 Smithair Concept est bien chargé !
      </h1>
      <p className="text-gray-500 mt-4 text-lg">
        {isClient ? "✅ Contenu chargé côté client" : "⏳ Chargement..."}
      </p>
      <div className="mt-6 p-4 bg-white shadow-lg rounded-lg">
        <p className="text-gray-700 text-lg">
          🔢 Nombre aléatoire : {randomNumber ? randomNumber : "⏳ Chargement..."}
        </p>
        <p className="text-gray-700 text-lg mt-2">
          ⏰ Heure actuelle : {currentTime ? currentTime : "⏳ Chargement..."}
        </p>
      </div>
    </div>
  );
}
