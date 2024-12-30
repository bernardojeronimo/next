import React from 'react';
import { Item } from './Item';
import { CartProps } from '../../app/models/interfaces';

export function Cart({
  isOpen,
  onClose,
  cartItems,
  updateQuantity,
  removeFromCart,
  getTotal,
  handlePurchase,
}: CartProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center transition-opacity duration-300 ease-in-out">
      <div className="bg-white rounded-lg p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto transition-transform transform duration-300 ease-in-out">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Carrinho</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            ✕
          </button>
        </div>
        {cartItems.length === 0 ? (
          <p className="text-gray-500">Seu carrinho está vazio</p>
        ) : (
          <>
            <div className="mt-4 mb-4">
              {cartItems.map((item) => (
                <Item
                  key={item.id}
                  id={item.id}
                  name={item.title}
                  price={item.price}
                  quantity={item.quantity}
                  image={item.image}
                  onUpdateQuantity={updateQuantity}
                  onRemove={removeFromCart}
                />
              ))}
            </div>
            <div className="border-t pt-4">
              <div className="flex justify-between font-bold text-xl">
                <span>Total:</span>
                <span>{getTotal().toFixed(2)}€</span>
              </div>
            </div>
          </>
        )}
        <div className="mt-6 flex justify-between">
          <button
            onClick={onClose}
            className="bg-gray-200 text-gray-700 hover:bg-gray-300 py-2 px-4 rounded-lg w-full"
          >
            Continuar Comprando
          </button>
          {cartItems.length === 0 ? (
            <button
              className="bg-gray-200 text-gray-700 hover:bg-gray-300 py-2 px-4 rounded-lg w-full ml-4"
              disabled
            >
              Finalizar Compra
            </button>
          ) : (
            <button
              onClick={handlePurchase}
              className="bg-blue-500 text-white hover:bg-blue-600 py-2 px-4 rounded-lg w-full ml-4"
            >
              Finalizar Compra
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
