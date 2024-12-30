import React, { useState } from 'react';
import { useCart } from '../../components/hooks/useCart';
import { Cart } from './Cart';

export default function Btn() {
  const [isOpen, setIsOpen] = useState(false);
  const { cartItems } = useCart();

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
      >
        <div className="relative">
          <div className="flex items-center">
            🛒 ({cartItems.length})
          </div>
        </div>
      </button>
      
      <Cart
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
}