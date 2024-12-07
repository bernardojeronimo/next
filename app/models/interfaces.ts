import useSWR from "swr";

export interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    image: string;
    category: string;
    rating: {
      rate: number;
      count: number;
    };
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());
const {data, error} = useSWR<Mydata[]>
  
