'use client';

import {
  ColumnDef,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  flexRender,
} from '@tanstack/react-table';
import { useEffect, useState } from 'react';

type User = {
  _id: string;
  username: string;
  name: string;
  email: string;
  role: string;
};

type ApiResponse = {
  users: User[];
  total: number;
  page: number;
  limit: number;
};

export default function UsersTable() {
  const [data, setData] = useState<User[]>([]);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [sorting, setSorting] = useState([{ id: 'name', desc: false }]);

  const fetchUsers = async () => {
    try {
      const sort = sorting[0]?.id || 'name';
      const order = sorting[0]?.desc ? 'desc' : 'asc';
      const res = await fetch(
        `http://localhost:4000/api/users?page=${page}&limit=5&search=${search}&sort=${sort}&order=${order}`
      );
      const json: ApiResponse = await res.json();
      setData(json.users);
      setTotal(json.total);
    } catch (err) {
      console.error('❌ Erreur fetch API :', err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [search, page, sorting]);

  const handleDelete = async (id: string, name: string) => {
    const confirmDelete = confirm(`Supprimer ${name} ?`);
    if (!confirmDelete) return;

    try {
      const res = await fetch(`http://localhost:4000/api/users/${id}`, {
        method: 'DELETE',
      });

      if (res.ok) {
        alert('✅ Utilisateur supprimé !');
        fetchUsers();
      } else {
        alert('❌ Échec de la suppression.');
      }
    } catch (err) {
      console.error('Erreur suppression :', err);
    }
  };

  const columns: ColumnDef<User>[] = [
    {
      accessorKey: 'name',
      header: 'Nom',
    },
    {
      accessorKey: 'email',
      header: 'Email',
    },
    {
      accessorKey: 'role',
      header: 'Rôle',
    },
    {
      id: 'actions',
      header: 'Actions',
      cell: ({ row }) => (
        <div className="flex space-x-2">
          <button
            onClick={() => alert(`Modifier ${row.original.name}`)}
            className="text-blue-600 hover:underline text-sm"
          >
            Modifier
          </button>
          <button
            onClick={() => handleDelete(row.original._id, row.original.name)}
            className="text-red-600 hover:underline text-sm"
          >
            Supprimer
          </button>
        </div>
      ),
    },
  ];

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    manualPagination: true,
    pageCount: Math.ceil(total / 5),
  });

  return (
    <div className="p-6">
      <div className="mb-4 flex justify-between items-center">
        <h2 className="text-xl font-bold">Utilisateurs</h2>
        <input
          type="text"
          placeholder="Rechercher..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1);
          }}
          className="p-2 border rounded"
        />
      </div>

      <table className="w-full border border-gray-200">
        <thead className="bg-gray-100">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="text-left p-2 cursor-pointer select-none"
                  onClick={header.column.getToggleSortingHandler()}
                >
                  {flexRender(header.column.columnDef.header, header.getContext())}
                  {header.column.getIsSorted() === 'asc' ? ' 🔼' : ''}
                  {header.column.getIsSorted() === 'desc' ? ' 🔽' : ''}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="border-t">
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="p-2">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-4 flex justify-between items-center">
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          Précédent
        </button>
        <span>Page {page}</span>
        <button
          onClick={() => setPage((prev) => prev + 1)}
          disabled={page * 5 >= total}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          Suivant
        </button>
      </div>
    </div>
  );
}
