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
  discountPer: number;
};

export type ProductsCategories = {
  id: string;
  category: string;
  imgUrl: string;
  route: string;
};

export type CartProduct = {
  id: string;
  name: string;
  color: string;
  size: string;
  amount: number;
  price: number;
  discountPer: number;
  image: string;
  collections: string;
  style: string;
  route: string;
  gender: "men" | "women";
};

export type Collection = {
  id: string;
  collection: string;
  route: string;
};

export type ImageInfo = {
  route: string;
  imgUrl: string;
  subtitle: string;
  title: string;
};

export type Gender = "men" | "women";
