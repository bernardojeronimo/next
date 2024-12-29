import React from 'react';
import { SortFilterProps } from '../../app/models/interfaces';

export default function SortFilter({ onSortChange }: SortFilterProps) {
  return (
    <div className="flex flex-col">
      <label className="text-sm font-medium text-gray-700 mb-1">
        Ordenar por
      </label>
      <select
        onChange={(e) => onSortChange(e.target.value)}
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">Selecione</option>
        <option value="price-asc">Preço: Menor para Maior</option>
        <option value="price-desc">Preço: Maior para Menor</option>
      </select>
    </div>
  );
}