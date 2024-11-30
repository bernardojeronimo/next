// components/Card.js

import React from 'react';

const Card = ({ produto }) => {
  return (
    <article className="produto">
      <figure>
        <img src={produto.image} alt={produto.title} />
      </figure>

      <section className="produto-info">
        <h2>{produto.title}</h2>
        <strong className="preco">{produto.price.toFixed(2)}€</strong>
        <button
          onClick={() => {
            alert(`Adicionado ao carrinho: ${produto.title}`);
            adicionarCarrinho(produto);
          }}
        >
          + Adicionar ao cesto
        </button>
      </section>
    </article>
  );
};

function adicionarCarrinho(produto) {
  let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  carrinho.push(produto);
  localStorage.setItem('carrinho', JSON.stringify(carrinho));
}

export default Card;
