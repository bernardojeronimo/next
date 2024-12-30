import React, { useState } from 'react';
import { useCart } from '../hooks/useCart';
import { Cart } from './Cart';


export default function Btn() {
  const [isOpen, setIsOpen] = useState(false);
  const { cart } = useCart();

  return (
    <><button
      onClick={() => setIsOpen(true)}
      className="fixed bottom-4 right-4 bg-blue-100 text-white p-4 rounded-full shadow-lg hover:bg-blue-200"
    >
      <div className="relative">
        <div className='w-100 h-100'>🛒({cart.length})</div>
      </div>
    </button>
      <Cart
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
}