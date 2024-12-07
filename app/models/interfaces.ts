import useSWR from "swr";

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

