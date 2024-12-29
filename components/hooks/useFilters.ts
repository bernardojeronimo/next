import { useState, useEffect } from 'react';
import { Product } from '../../app/models/interfaces';

export function useFilters(initialData: Product[] | undefined) {
  const [filteredData, setFilteredData] = useState<Product[]>([]);
  const [category, setCategory] = useState('');
  const [sortType, setSortType] = useState('');
  const [search, setSearch] = useState('');

  useEffect(() => {
    if (!initialData) return;

    let result = [...initialData];

    // Apply category filter
    if (category) {
      result = result.filter(item => item.category === category);
    }

    // Apply search filter
    if (search) {
      const searchLower = search.toLowerCase();
      result = result.filter(item =>
        item.title.toLowerCase().includes(searchLower) ||
        item.description.toLowerCase().includes(searchLower)
      );
    }

    // Apply sorting
    if (sortType) {
      result.sort((a, b) => {
        if (sortType === 'price-asc') {
          return a.price - b.price;
        }
        if (sortType === 'price-desc') {
          return b.price - a.price;
        }
        return 0;
      });
    }

    setFilteredData(result);
  }, [initialData, category, sortType, search]);

  return {
    filteredData,
    setCategory,
    setSortType,
    search,
    setSearch
  };
}