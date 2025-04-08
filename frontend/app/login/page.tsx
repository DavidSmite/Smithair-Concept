'use client';

import { useState } from 'react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const res = await fetch('http://localhost:4000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();
      if (data.token) {
        document.cookie = `token=${data.token}; path=/; max-age=3600`;
        window.location.href = '/admin';
      } else {
        alert(data.message || 'Échec de la connexion');
      }
    } catch (err) {
      alert('Erreur de connexion');
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen p-8 flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Connexion Admin</h1>
      <input
        className="border p-2"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="border p-2"
        type="password"
        placeholder="Mot de passe"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="bg-black text-white p-2" onClick={handleLogin}>
        Se connecter
      </button>
    </div>
  );
}
