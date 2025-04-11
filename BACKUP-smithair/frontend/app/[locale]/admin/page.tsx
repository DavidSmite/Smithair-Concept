'use client';

import { useTranslations } from 'next-intl';

export default function AdminPage() {
  const t = useTranslations('admin');

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">{t('title')}</h1>
      <p className="text-gray-600">{t('welcome')}</p>
    </div>
  );
}
