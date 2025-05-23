import { productCollections } from "@/data";
import { HeroSection, ProductCollectionsSection } from "@/layout";

export function HomePage() {
  return (
    <main>
      <HeroSection />

      <ProductCollectionsSection collections={productCollections.slice(0, 4)} />
    </main>
  );
}
