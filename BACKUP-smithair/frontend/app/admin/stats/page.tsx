'use client';

import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts';

const mockData = [
  { name: 'Janv', ventes: 6 },
  { name: 'Févr', ventes: 9 },
  { name: 'Mars', ventes: 12 },
  { name: 'Avr', ventes: 5 },
];

export default function StatsPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">📊 Statistiques</h1>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={mockData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="ventes" fill="#6366f1" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
