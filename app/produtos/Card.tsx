import React from 'react';
import { Product } from '../models/interfaces';

export default function Card({
  title,
  category,
  price,
  description,
  image,
  rating,
}: Product) {
  return (
    <div className="bg-white border rounded-lg shadow-lg p-4">
      <img
        src={image}
        alt={title}
        className="w-full h-64 object-cover rounded-lg mb-4"
      />
      <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
      <p className="text-gray-500">{category}</p>
      <p className="text-gray-700 mt-2">{description}</p>
      <div className="flex justify-between items-center mt-4">
        <span className="text-lg font-bold">{price.toFixed(2)}€</span>
        <div className="flex items-center">
          <span className="text-yellow-500">{rating.rate}⭐</span>
          <span className="ml-2 text-gray-500">({rating.count} reviews)</span>
        </div>
      </div>
    </div>
  );
}
