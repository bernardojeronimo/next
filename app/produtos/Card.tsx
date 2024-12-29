import React, { useState } from "react";
import { Product } from "../models/interfaces";
import { useCart } from '../../components/hooks/useCart';

interface CardProps extends Product {}

export default function Card(props: CardProps) {
  const { addToCart } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(props);
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
    }, 1000);
  };

  return (
    
    <section className="bg-white border rounded-xl shadow-xl hover:shadow-xl transition-transform duration-300 hover:-translate-y-2 flex flex-col">
      {/* Imagem do Produto */}
      <article className="overflow-hidden rounded-t-lx pt-10">
        <img
          src={props.image}
          alt={props.title}
          className="w-full h-36 object-contain"
        />
      </article>

      {/* Corpo do Card */}
      <article className="p-4 flex-grow">
        <h2 className="text-lg font-bold text-gray-800">
          {props.title}
        </h2>
        <p className="text-sm text-blue-500 italic font-bold pb-2">
          {props.category}
        </p>
        <p className="text-sm text-gray-600">
          {props.description}
        </p>
      </article>

      {/* Rodapé do Card */}
      <article className="p-4 border-t flex justify-between items-center">
        <span className="text-lg font-bold text-blue-600">
          {props.price.toFixed(2)}€
        </span>
        <article className="text-sm text-yellow-500 flex items-center">
          {props.rating.rate}⭐{" "}
          <span className="text-gray-400 ml-2">({props.rating.count})</span>
        </article>
      </article>
      <button
          onClick={handleAddToCart}
          className={`w-full py-2 rounded transition-colors duration-200 
            bg-blue-400 hover:bg-blue-500 text-white`}
        >
          {isAdded ? 'Adicionado' : 'Adicionar ao Carrinho'}
        </button>
    </section>
  );
}
