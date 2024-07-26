type Size = {
  size: string;
  isAvailable: boolean;
};

export type Product = {
  id: string;
  gender: string;
  name: string;
  route: string;
  collections: string;
  style: string;
  cut: string;
  neck: string;
  sleeve: string;
  fabric: string;
  date: number;
  price: number;
  description: string;
  images: string[];
  colors: string[];
  sizes: Size[];
  stock: number;
  popularity: boolean;
};

export type ProductsCategories = {
  id: number;
  category: string;
  imgUrl: string;
  route: string;
};
