'use client';

import LogoutButton from './LogoutButton';
import { useEffect, useState } from 'react';
import jwtDecode from 'jwt-decode';

type DecodedToken = {
  id: string;
  iat: number;
  exp: number;
};

export default function AdminHeader() {
  const [email, setEmail] = useState('');

  useEffect(() => {
    const getTokenFromCookies = () => {
      const tokenMatch = document.cookie.match(/token=([^;]+)/);
      return tokenMatch ? tokenMatch[1] : null;
    };

    const token = getTokenFromCookies();
    if (!token) return;

    try {
      const decoded: any = jwtDecode(token);
      // Tu peux ajouter ici une vraie requête pour récupérer l'email de l'admin via son ID
      setEmail("admin@example.com"); // ou utilise decoded.email si présent dans le token
    } catch (err) {
      console.error("Token invalide :", err);
    }
  }, []);

  return (
    <div className="flex items-center justify-between bg-gray-100 px-4 py-2 border-b">
      <p className="text-sm text-gray-700">
        ✅ Connecté en tant que : <strong>{email}</strong>
      </p>
      <LogoutButton />
    </div>
  );
}
