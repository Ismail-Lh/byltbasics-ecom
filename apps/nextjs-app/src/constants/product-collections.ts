import { v4 as uuidv4 } from "uuid";

export const productCollections = [
  {
    collection: "long sleeves",
    imgUrl: "/assets/long-sleeves-1.jpg",
    route: "/collections/men/mens-long-sleeves",
    id: uuidv4(),
  },
  {
    collection: "shorts",
    imgUrl: "/assets/board-shorts.jpg",
    route: "/collections/men/mens-shorts",
    id: uuidv4(),
  },
  {
    collection: "tanks",
    imgUrl: "/assets/tanks-1.jpg",
    route: "/collections/men/mens-tanks",
    id: uuidv4(),
  },
  {
    collection: "drop-cuts",
    imgUrl: "/assets/drop-cuts-2.jpg",
    route: "/collections/men/mens-drop-cuts",
    id: uuidv4(),
  },
  {
    collection: "drop-cuts",
    imgUrl: "/assets/drop-cuts-1.jpg",
    route: "/collections/men/mens-drop-cuts",
    id: uuidv4(),
  },
  {
    collection: "split helms",
    imgUrl: "/assets/split-helms-1.jpg",
    route: "/products/lux-basic-crew-split-hem",
    id: uuidv4(),
  },
  {
    collection: "v-neck",
    imgUrl: "/assets/v-neck-1.jpg",
    route: "/collections/men/mens-vnecks",
    id: uuidv4(),
  },
  {
    collection: "tanks",
    imgUrl: "/assets/tanks-2.jpg",
    route: "/collections/men/mens-tanks",
    id: uuidv4(),
  },
] as const;
