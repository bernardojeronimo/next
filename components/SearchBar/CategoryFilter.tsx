import React, { useState, useEffect } from 'react';
import { CategoryFilterProps } from '../../app/models/interfaces';

export default function CategoryFilter({ onCategoryChange }: CategoryFilterProps) {
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    fetch('https://deisishop.pythonanywhere.com/categories/')
      .then(response => {
        if (!response.ok) throw new Error('Failed to fetch categories');
        return response.json();
      })
      .then(setCategories)
      .catch(error => console.error('Error fetching categories:', error));
  }, []);

  return (
    <div className="flex flex-col">
      <label className="text-sm font-medium text-gray-700 mb-1">
        Categoria
      </label>
      <select
        onChange={(e) => onCategoryChange(e.target.value)}
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">Todas as categorias</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}