import { useState, useEffect } from 'react';
import { Product } from '../../app/models/interfaces';

export function useSearch(data: Product[] | undefined) {
  const [search, setSearch] = useState('');
  const [filteredData, setFilteredData] = useState<Product[]>([]);

  useEffect(() => {
    if (!data) return;
    
    const filtered = data.filter((product) => 
      product.title.toLowerCase().includes(search.toLowerCase()) ||
      product.category.toLowerCase().includes(search.toLowerCase()) ||
      product.description.toLowerCase().includes(search.toLowerCase())
    );
    
    setFilteredData(filtered);
  }, [search, data]);

  return { search, setSearch, filteredData };
}