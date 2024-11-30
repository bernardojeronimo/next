"use client";

import { useEffect, useState } from "react";
import Produtos from "./Card";

export default function Home() {

  useEffect(() => {
    document.body.classList.add('home-body');
    return () => {
      document.body.classList.remove('home-body');
    };
  }, []);
  const [produtos, setProdutos] = useState([]);
  const [carrinho, setCarrinho] = useState([]);

  useEffect(() => {
    // Carregar os produtos
    fetch('https://deisishop.pythonanywhere.com/products/')
      .then(response => response.json())
      .then(data => setProdutos(data))
      .catch(error => console.error('Erro ao carregar produtos:', error));

    // Carregar carrinho do localStorage
    const carrinhoSalvo = JSON.parse(localStorage.getItem('carrinho')) || [];
    setCarrinho(carrinhoSalvo);
  }, []);

  const adicionarCarrinho = (produto) => {
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

    carrinho.push(produto);
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    setCarrinho(carrinho);
  };

  const removerCarrinho = (produto) => {
    const carrinho = JSON.parse(localStorage.getItem('carrinho'));

        const index = carrinho.findIndex(p => p.title == produto.title);
        if (index != -1) {
            carrinho.splice(index, 1);
            localStorage.setItem('carrinho', JSON.stringify(carrinho));
        }
      setCarrinho(carrinho);
  };

  return (
    <main>
      <h2>Selecione os seus Produtos</h2>

      <section id="produtos">
        <Produtos
          produtos={produtos} 
          setProdutos={setProdutos} 
          carrinho={carrinho}
          adicionarCarrinho={adicionarCarrinho}
          removerCarrinho={removerCarrinho}
        />
      </section>
    </main>
  );
}
