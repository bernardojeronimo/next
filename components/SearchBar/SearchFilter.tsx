import React from 'react';
import { SearchFilterProps } from '../../app/models/interfaces';

export default function SearchFilter({ onSearchChange, searchValue }: SearchFilterProps) {
  return (
    <div className="flex flex-col">
      <label className="text-sm font-medium text-gray-700 mb-1">
        Pesquisar
      </label>
      <input
        type="text"
        value={searchValue}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="Pesquise por produto"
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}