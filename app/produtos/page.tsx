"use client";

import React, { useEffect } from 'react';
import useSWR from 'swr';
import Card from './Card'; 
import { Product } from '../models/interfaces';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Page() {
  const { data, error, isLoading } = useSWR<Product[]>('https://deisishop.pythonanywhere.com/products/', fetcher);

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
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Produtos</h1>
      <article className="gap-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data.map((product) => (
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
    </section>
  );
}
