"use client";

import React, { useState, useEffect } from 'react';
import useSWR from 'swr';
import Card from './Card';
import FilterBar from '../../components/SearchBar/FilterBar';
import Btn from '../../components/Cart/Btn';
import { Cart } from '../../components/Cart/Cart';
import { useFilters } from '../../components/hooks/useFilters';
import { Product } from '../models/interfaces';
import { CartItem } from '../models/interfaces';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Page() {
  const { data, error, isLoading } = useSWR<Product[]>('/api/products', fetcher);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [coupon, setCoupon] = useState('');
  const [isStudent, setIsStudent] = useState(false);
  const [name, setName] = useState('');
  const [isPurchaseModalOpen, setIsPurchaseModalOpen] = useState(false); // Controle da exibição do modal de compra
  const [purchaseResult, setPurchaseResult] = useState<{ 
    totalCost: string; 
    reference: string; 
    message: string;
    error: string;
  }>({
    totalCost: '',
    reference: '',
    message: '',
    error: '',
  }); // Estado para armazenar o resultado da compra

  const { filteredData, setCategory, setSortType, search, setSearch } = useFilters(data);

  useEffect(() => {
    document.body.classList.add('home-body');
    return () => {
      document.body.classList.remove('home-body');
    };
  }, []);

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product: Product) => {
    setCartItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.id === product.id);
      if (existingItem) {
        return currentItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...currentItems, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId: string) => {
    setCartItems((currentItems) =>
      currentItems.filter((item) => item.id !== productId)
    );
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity < 1) return;
    setCartItems((currentItems) =>
      currentItems.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const getTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handlePurchase = () => {
    fetch('https://deisishop.pythonanywhere.com/buy/', {
      method: 'POST',
      body: JSON.stringify({
        products: cartItems.map((item) => item.id),
        student: isStudent,
        coupon: coupon,
        name: name,
      }),
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(response => response.json())
      .then((dados) => {
        // Atualiza o estado com os dados da compra
        setPurchaseResult({
          totalCost: dados.totalCost,
          reference: dados.reference,
          message: dados.message,
          error: '',  // Caso não haja erro, error fica vazio
        });
        setCartItems([]); // Limpa o carrinho após a compra
        setIsPurchaseModalOpen(false); // Fecha o modal de compra
      })
      .catch((error) => {
        // Se ocorrer um erro, exibe a mensagem de erro
        setPurchaseResult({
          totalCost: '',
          reference: '',
          message: '',
          error: `Erro na compra: ${error.message}`, // Corrigido para interpolar a variável `error.message`
        });
      });
  };

  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;
  if (!data) return <div>No data available</div>;

  return (
    <section className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Selecione os seus Produtos</h2>
      <FilterBar
        onCategoryChange={setCategory}
        onSortChange={setSortType}
        onSearchChange={setSearch}
        searchValue={search}
      />
      <article className="gap-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredData.map((product) => (
          <Card key={product.id} {...product} addToCart={addToCart} />
        ))}
      </article>

      <Btn
        onOpen={() => setIsCartOpen(true)}
        cartItemCount={cartItems.length}
      />

      {/* Exibindo o componente Cart */}
      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        updateQuantity={updateQuantity}
        removeFromCart={removeFromCart}
        getTotal={getTotal}
        handlePurchase={() => setIsPurchaseModalOpen(true)} // Ao clicar em finalizar compra, abrir o modal
      />

      {/* Modal de finalização de compra */}
      {isPurchaseModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 max-w-lg w-full max-h-[80vh] overflow-y-auto">
            <h2 className="text-2xl font-bold mb-4">Finalizar Compra</h2>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Nome:</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-2 p-2 w-full border rounded-lg"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Cupom de Desconto:</label>
                <input
                  type="text"
                  value={coupon}
                  onChange={(e) => setCoupon(e.target.value)}
                  className="mt-2 p-2 w-full border rounded-lg"
                />
              </div>
              <div className="mb-4">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={isStudent}
                    onChange={(e) => setIsStudent(e.target.checked)}
                    className="mr-2"
                  />
                  Sou estudante
                </label>
              </div>
              <div className="mt-6 flex justify-between">
                <button
                  onClick={() => setIsPurchaseModalOpen(false)} // Fechar o modal
                  className="bg-gray-200 text-gray-700 hover:bg-gray-300 py-2 px-4 rounded-lg"
                >
                  Fechar
                </button>
                <button
                  onClick={handlePurchase}
                  className="bg-blue-500 text-white hover:bg-blue-600 py-2 px-4 rounded-lg"
                >
                  Confirmar Compra
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Exibindo os resultados após a compra */}
      {purchaseResult.reference && (
        <div className="mt-6 p-4 border border-gray-200 bg-green-100 rounded-lg">
          <h3 className="text-xl font-bold">Compra Finalizada!</h3>
          <p className='mt-3'><strong>Total:</strong> {purchaseResult.totalCost}€</p>
          <p className='mt-3'><strong>Referência:</strong> {purchaseResult.reference}</p>
          <p className='mt-3 p-3 border border-x-8 border-y-2 text-center border-gray-900 bg-gray-100 rounded-lg shadow-2xl'><strong>{purchaseResult.message}</strong></p>
        </div>
      )}

      {/* Exibindo o erro, caso aconteça */}
      {purchaseResult.error && (
        <div className="mt-6 p-4 border border-red-200 bg-red-100 rounded-lg">
          <p className="text-red-600">{purchaseResult.error}</p>
        </div>
      )}
    </section>
  );
}
