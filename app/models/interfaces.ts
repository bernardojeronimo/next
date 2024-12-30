export interface Product {
  id: string;
  title: string;
  category: string;
  price: number;
  description: string;
  image: string;
  rating: {
      rate: number;
      count: number;
  };
}

export interface Tecnologia {
  id: number;
  title: string;
  image: string;
  description: string;
  rating: number;
}

// SearchBar
export interface FilterProps {
  onCategoryChange: (category: string) => void;
  onSortChange: (sortType: string) => void;
  onSearchChange: (search: string) => void;
  searchValue: string;
}

export interface SearchBarProps {
  search: string;
  setSearch: (value: string) => void;
}

export interface SearchFilterProps {
  onSearchChange: (search: string) => void;
  searchValue: string;
}

export interface SortFilterProps {
  onSortChange: (sortType: string) => void;
}

export interface CategoryFilterProps {
  onCategoryChange: (category: string) => void;
}

//

// carrinho

export interface CardProps extends Product {
  addToCart: (product: Product) => void;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  updateQuantity: (productId: string, quantity: number) => void;
  removeFromCart: (productId: string) => void;
  getTotal: () => number;
}

export interface ItemProps {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemove: (id: string) => void;
}

export interface BtnProps {
  onOpen: () => void;
  cartItemCount: number;
}

//