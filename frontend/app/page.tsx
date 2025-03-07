"use client"; // Désactive le SSR pour ce composant

import { useEffect, useState } from "react";

export default function Home() {
  const [timestamp, setTimestamp] = useState(0);
  const [randomNumber, setRandomNumber] = useState(0);

  useEffect(() => {
    setTimestamp(Date.now());
    setRandomNumber(Math.random());
  }, []);

  return (
    <div>
      <h1>{timestamp}</h1>
      <h2>{randomNumber}</h2>
    </div>
  );
}
