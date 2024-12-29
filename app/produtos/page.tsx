"use client";

import React, { useEffect, useState } from 'react';
import useSWR from 'swr';
import Card from './Card';
import FilterBar from '../../components/SearchBar/FilterBar';
import CartButton from '../../components/Cart/btn';
import CartModal from '../../components/Cart/Cart';
import { useFilters } from '../../components/hooks/useFilters';
import { Product } from '../models/interfaces';

export default function Page() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, error, isLoading } = useSWR<Product[], Error>('api/products', fetcher);
  const { filteredData, setCategory, setSortType, search, setSearch } = useFilters(data);

  useEffect(() => {
    document.body.classList.add('home-body');
    return () => {
      document.body.classList.remove('home-body');
    };
  }, []);

  if (error) return <>Failed to load</>;
  if (isLoading) return <>Loading...</>;
  if (!data) return <>No data available</>;

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
          <Card
            key={product.id}
            id={product.id}
            title={product.title}
            category={product.category}
            price={product.price}
            description={product.description}
            image={product.image}
            rating={product.rating}
          />
        ))}
      </article>
      <CartButton onClick={() => setIsCartOpen(true)} />
      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </section>
  );
}