import React from 'react';
import { useCart } from '../../components/hooks/useCart';
import { Item } from './Item';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Cart({ isOpen, onClose }: CartProps) {
  const { cartItems, updateQuantity, removeFromCart, getTotal } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Carrinho</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            ✕
          </button>
        </div>

        {cartItems.length === 0 ? (
          <p>Seu carrinho está vazio</p>
        ) : (
          <>
            <div className="space-y-4">
              {cartItems.map((item) => (
                <Item
                  name={''} key={item.id}
                  {...item}
                  onUpdateQuantity={updateQuantity}
                  onRemove={removeFromCart}                />
              ))}
            </div>
            <div className="border-t pt-4 mt-4">
              <div className="flex justify-between font-bold">
                <span>Total:</span>
                <span>R$ {getTotal().toFixed(2)}</span>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}