"use client";

import React, { useEffect, useState } from 'react';
import useSWR from 'swr';
import Card from './Card';
import FilterBar from '../../components/SearchBar/FilterBar';
import Btn  from '../../components/Cart/Btn';
import { Cart } from '../../components/Cart/Cart';
import { useFilters } from '../../components/hooks/useFilters';
import { Product } from '../models/interfaces';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Page() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { data, error, isLoading } = useSWR<Product[]>('/api/products', fetcher);
  const { filteredData, setCategory, setSortType, search, setSearch } = useFilters(data);

  useEffect(() => {
    document.body.classList.add('home-body');
    return () => {
      document.body.classList.remove('home-body');
    };
  }, []);

  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;
  if (!data) return <div>No data available</div>;

  return (
    <section className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        Selecione os seus Produtos
      </h1>
      <FilterBar
        onCategoryChange={setCategory}
        onSortChange={setSortType}
        onSearchChange={setSearch}
        searchValue={search}
      />
      <article className="gap-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredData.map((product) => (
          <Card key={product.id} {...product} />
        ))}
      </article>
      <Btn/>
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </section>
  );
}