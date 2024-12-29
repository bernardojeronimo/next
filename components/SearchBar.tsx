import React from 'react';
import { SearchBarProps } from './../app/models/interfaces';

export default function SearchBar({ search, setSearch }: SearchBarProps) {
  return (
    <div className="mb-6">
      <input
        type="text"
        placeholder="Pesquisar produtos..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}