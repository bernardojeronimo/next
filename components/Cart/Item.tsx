import React from 'react';
import { CartItem as CartItemType } from '../hooks/useCart';

interface CartItemProps {
  item: CartItemType;
  onUpdateQuantity: (productId: number, quantity: number) => void;
  onRemove: (productId: number) => void;
}

export default function Item({ item, onUpdateQuantity, onRemove }: CartItemProps) {
  return (
    <div className="flex items-center justify-between p-4 border-b">
      <div className="flex items-center space-x-4">
        <img 
          src={item.image} 
          alt={item.title} 
          className="w-16 h-16 object-cover rounded"
        />
        <div>
          <h3 className="font-medium">{item.title}</h3>
          <p className="text-gray-600">R$ {item.price.toFixed(2)}</p>
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <button
            onClick={() => onUpdateQuantity(Number(item.id), item.quantity - 1)}
            className="px-2 py-1 bg-gray-200 rounded"
          >
            -
          </button>
          <span>{item.quantity}</span>
          <button
            onClick={() => onUpdateQuantity(Number(item.id), item.quantity + 1)}
            className="px-2 py-1 bg-gray-200 rounded"
          >
            +
          </button>
        </div>
        
        <button
          onClick={() => onRemove(Number(item.id))}
          className="text-red-500 hover:text-red-700"
        >
          Remover
        </button>
      </div>
    </div>
  );
}