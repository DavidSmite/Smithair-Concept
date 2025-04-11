'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function Tracker() {
  const path = usePathname();

  useEffect(() => {
    const trackVisit = async () => {
      try {
        await fetch('http://localhost:4000/api/track', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ path }),
        });
      } catch (err) {
        console.error('❌ Erreur tracking :', err);
      }
    };

    trackVisit();
  }, [path]);

  return null;
}
