export type CartItem = {
  title: string;
  price: number;
  imageUrl: string;
  quantity: number;
  id: number;
};

export type Product = {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: {
    rate: number;
    count: number;
  };
  title: string;
};

export type AddToCartHandler = (product: Product, quantity: number) => void;