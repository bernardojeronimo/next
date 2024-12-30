import React from 'react';

interface CartItemProps {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
  onUpdateQuantity: (id: number, quantity: number) => void;
  onRemove: (id: number) => void;
}

export function Item({ 
  id, 
  name, 
  price, 
  quantity, 
  image,
  onUpdateQuantity, 
  onRemove 
}: CartItemProps) {
  return (
    <div className="bg-white border rounded-xl shadow-md mb-4 flex flex-col">
      <div className="overflow-hidden rounded-t-xl pt-4">
        <img
          src={image}
          alt={name}
          className="w-full h-32 object-contain"
        />
      </div>
      
      <div className="p-4">
        <h2 className="text-lg font-bold text-gray-800 mb-2">
          {name}
        </h2>
        
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-blue-600">
            R$ {price.toFixed(2)}
          </span>
          
          <div className="flex items-center gap-2">
            <button 
              onClick={() => quantity > 1 && onUpdateQuantity(id, quantity - 1)}
              className="px-3 py-1 bg-gray-200 rounded-full hover:bg-gray-300"
            >
              -
            </button>
            <span className="w-8 text-center">{quantity}</span>
            <button 
              onClick={() => onUpdateQuantity(id, quantity + 1)}
              className="px-3 py-1 bg-gray-200 rounded-full hover:bg-gray-300"
            >
              +
            </button>
          </div>
        </div>
        
        <button 
          onClick={() => onRemove(id)}
          className="mt-3 w-full py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
        >
          Remover
        </button>
      </div>
    </div>
  );
}