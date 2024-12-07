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



