import React from 'react';
import Item from './Item';
import { useCart } from '../hooks/useCart';

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartModal({ isOpen, onClose }: CartModalProps) {
  const { cartItems, updateQuantity, removeFromCart, getTotal, clearCart } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6  max-w-2xl w-full max-h-[80vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Carrinho</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            ✕
          </button>
        </div>

        {cartItems.length == 0 ? (
          <p className="text-center py-8 text-gray-500">
            Seu carrinho está vazio
          </p>
        ) : (
          <>
            <div className="space-y-4">
              {cartItems.map(item => (
                <Item
                  key={item.id}
                  item={item}
                  onUpdateQuantity={updateQuantity}
                  onRemove={removeFromCart}
                />
              ))}
            </div>

            <div className="mt-6 border-t pt-4">
              <div className="flex justify-between items-center mb-4">
                <span className="text-xl font-bold">Total:</span>
                <span className="text-xl">{getTotal().toFixed(2)}€</span>
              </div>

              <div className="flex space-x-4">
                <button
                  onClick={clearCart}
                  className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Limpar Carrinho
                </button>
                <button
                  onClick={() => {
                    // Implement checkout logic here
                    alert('Implementar checkout');
                  }}
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 flex-1"
                >
                  Finalizar Compra
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}