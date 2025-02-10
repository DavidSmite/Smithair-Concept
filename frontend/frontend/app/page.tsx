"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600">
        🚀 Smithair Concept {isClient ? "est bien chargé !" : "est en cours..."}
      </h1>
    </div>
  );
}
