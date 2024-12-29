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
