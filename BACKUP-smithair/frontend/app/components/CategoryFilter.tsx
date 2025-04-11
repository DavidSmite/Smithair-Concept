"use client";

interface CategoryFilterProps {
  categories: string[];
  selected: string;
  onChange: (category: string) => void;
}

export default function CategoryFilter({ categories, selected, onChange }: CategoryFilterProps) {
  return (
    <div className="mb-4">
      <label className="font-semibold mr-2">Filtrer par catégorie :</label>
      <select
        value={selected}
        onChange={(e) => onChange(e.target.value)}
        className="p-2 border rounded"
      >
        <option value="">Toutes</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
    </div>
  );
}
