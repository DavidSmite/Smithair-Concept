"use client";
import "../styles/globals.css"; // Assure-toi d'importer Tailwind ici
import { useEffect } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    console.log("✅ TailwindCSS est chargé !");
  }, []);

  return <div className="bg-gray-100 min-h-screen">{children}</div>;
}
