'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    console.log('📦 Composant Login monté');
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('🚀 handleLogin déclenché');
    console.log('📨 Données envoyées :', { email, password });

    try {
      const response = await fetch('http://localhost:4000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ email, password }),
      });

      const rawText = await response.clone().text();
      console.log('🔍 Réponse brute :', rawText);

      let data;
      try {
        data = JSON.parse(rawText);
      } catch (e) {
        console.error('❌ Erreur de parsing JSON:', e);
        alert("Réponse serveur invalide.");
        return;
      }

      console.log('📨 Réponse du serveur (JSON):', data);

      if (response.ok && data.token) {
        document.cookie = `token=${data.token}; path=/; max-age=3600; SameSite=Strict`;
        console.log('✅ Token stocké → Redirection vers /admin');
        router.push('/admin');
      } else {
        console.warn('❌ Pas de token dans la réponse:', data);
        alert(data.message || 'Erreur de connexion');
      }
    } catch (error) {
      console.error('❌ Erreur lors de la connexion:', error);
      alert("Erreur réseau ou serveur.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <form onSubmit={handleLogin} className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Connexion Admin</h1>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 p-3 border rounded"
          required
        />

        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-6 p-3 border rounded"
          required
        />

        <button
          type="submit"
          className="w-full bg-black text-white py-3 rounded hover:bg-gray-800 transition"
        >
          Se connecter
        </button>
      </form>
    </div>
  );
}
