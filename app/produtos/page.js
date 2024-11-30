// app/produtos/page.js
"use client";
import React, { useEffect, useState } from 'react';
import Card from '../produtos/Card';

const ProdutosPage = () => {
  const [produtos, setProdutos] = useState([]);

  // Buscando dados da API usando useEffect
  useEffect(() => {
    async function fetchProdutos() {
      try {
        const res = await fetch('https://deisishop.pythonanywhere.com/products/');
        const data = await res.json();
        setProdutos(data);
      } catch (error) {
        console.error('Erro ao carregar os produtos:', error);
      }
    }

    fetchProdutos();
  }, []);

  return (
    <main>
      <h2>Produtos Disponíveis</h2>
      <section className="produtos" id="produtos">
        {produtos.length > 0 ? (
          produtos.map(produto => (
            <Card key={produto.id} produto={produto} />
          ))
        ) : (
          <p>Carregando produtos...</p>
        )}
      </section>
    </main>
  );
};

export default ProdutosPage;
