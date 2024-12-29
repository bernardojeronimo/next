import React from 'react';
import { useCart } from '../hooks/useCart';

interface CartButtonProps {
  onClick: () => void;
}

export default function CartButton({ onClick }: CartButtonProps) {
  const { cartItems } = useCart();
  
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <button
      onClick={onClick}
      className="fixed bottom-4 right-4 bg-blue-100 text-white p-4 rounded-full shadow-lg hover:bg-blue-200"
    >
      <div className="relative">
      <div className='w-100 h-100'>🛒</div>
        {itemCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
            {itemCount}
          </span>
        )}
      </div>
    </button>
  );
}