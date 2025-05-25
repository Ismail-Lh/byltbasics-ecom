import { v4 as uuidv4 } from "uuid";

export const HeroData = [
  {
    id: uuidv4(),
    title: "shop new styles",
    subtitle: "experience premium basics",
    imgUrlDesktop: "/assets/hero__desktop-new-collection.jpg",
    imgUrlMobile: "/assets/hero__mobile-new-collection.jpg",
    position: "center",
    color: "#fff",
    route: "/collections/new",
  },
  {
    id: uuidv4(),
    title: "summer dye collection",
    subtitle: "Meet the Cloud and Prism Dye Tees",
    imgUrlDesktop: "/assets/hero__desktop-summer-dye-collection.jpg",
    imgUrlMobile: "/assets/hero__mobile-summer-dye-collection.jpg",
    position: "center",
    color: "#fff",
    route: "/collections/summer-dye-collection",
  },
  {
    id: uuidv4(),
    title: "final summer markdowns",
    subtitle: "shop up 40% off",
    imgUrlDesktop: "/assets/hero__desktop-summer-markdowns.jpg",
    imgUrlMobile: "/assets/hero__mobile-summer-markdowns.jpg",
    position: "center",
    color: "#fff",
    route: "/collections/finale-summer-markdowns",
  },
  {
    id: uuidv4(),
    title: "new core collection",
    subtitle: "reinvented closet staples",
    imgUrlDesktop: "/assets/hero__desktop-new-core-collection.jpg",
    imgUrlMobile: "/assets/hero__mobile-new-core-collection.jpg",
    position: "center",
    color: "#fff",
    route: "/collections/new-core-collection",
  },
] as const;
