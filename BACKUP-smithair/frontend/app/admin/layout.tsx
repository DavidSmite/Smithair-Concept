'use client';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-6 bg-white min-h-screen">
      <h2 className="text-2xl font-semibold mb-6">Tableau de bord Admin</h2>
      <main>{children}</main>
    </div>
  );
}
