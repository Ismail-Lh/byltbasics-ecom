import { v4 as uuidv4 } from "uuid";

export const NavLinksData = [
  { id: uuidv4(), link: "men", route: "shop-men" },
  { id: uuidv4(), link: "women", route: "shop-women" },
  { id: uuidv4(), link: "last call", route: "sales" },
] as const;
