import { productCollections } from "@/constants/product-collections";

import { HeroSection, ProductCollectionsSection } from "../../layout";

export function HomePage() {
  return (
    <main>
      <HeroSection />

      <ProductCollectionsSection collections={productCollections.slice(0, 4)} />
    </main>
  );
}
