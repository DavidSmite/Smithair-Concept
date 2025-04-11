'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ProfilePage() {
  const router = useRouter();
  const [user, setUser] = useState<{ email: string; role: string } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cookies = document.cookie.split(';').reduce((acc, cookie) => {
      const [key, value] = cookie.trim().split('=');
      acc[key] = value;
      return acc;
    }, {} as Record<string, string>);

    const token = cookies['token'];
    if (!token) {
      router.push('/login');
      return;
    }

    try {
      const decoded = JSON.parse(atob(token.split('.')[1]));
      if (decoded.role !== 'admin') {
        alert("Accès refusé.");
        router.push('/login');
        return;
      }
      setUser({ email: decoded.email, role: decoded.role });
    } catch (err) {
      console.error('❌ Erreur token', err);
      router.push('/login');
    }

    setLoading(false);
  }, [router]);

  if (loading) return <div className="p-8 text-gray-300">Chargement...</div>;
  if (!user) return null;

  return (
    <div className="p-8 text-white">
      <h2 className="text-2xl font-bold mb-4">👤 Mon profil</h2>
      <p>Email : <strong>{user.email}</strong></p>
      <p>Rôle : <strong>{user.role}</strong></p>
    </div>
  );
}
