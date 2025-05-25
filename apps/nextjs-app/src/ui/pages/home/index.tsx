import { productCollections } from "@/constants/product-collections";
import { HeroImage } from "@/ui/layout/hero/components";

import { DiscountSubscriptionForm, HeroSection, ProductCollectionsSection } from "../../layout";

export function HomePage() {
  return (
    <main>
      <HeroSection />

      <ProductCollectionsSection collections={productCollections.slice(0, 4)} />

      <HeroImage
        title="women's essential collection"
        subtitle="Empowered Style. Essential Comfort."
        color="#fff"
        route="/collections/womens-essential-collection"
        imgUrlDesktop="/assets/hero__desktop-womens-essential-collection.jpg"
        imgUrlMobile="/assets/hero__mobile-womens-essential-collection.jpg"
      />

      {/* <ProductsSliderSection
        title="men's popular products"
        products={getPopularProducts("men")}
      /> */}

      <ProductCollectionsSection collections={productCollections.slice(4)} />

      <HeroImage
        title="performance collection"
        subtitle="Pushing The Limits"
        color="#fff"
        route="/collections/performance-collection"
        imgUrlDesktop="/assets/hero__desktop-performance-collection.jpg"
        imgUrlMobile="/assets/hero__mobile-performance-collection.jpg"
      />

      {/* <SplitContentSection
        istextfirst={true}
        title="basics to last a lifetime"
        text="Our pre-wash and wrinkle-free technology protect your new favorite shirt from everyday wear and tear."
        route="/pages/bylt-apparel-sizing-guide"
        imgUrl="/assets/split-content-img-1.jpg"
      />

      <HeroImage
        title="executive collection"
        subtitle="Made for the Modern Man."
        color="#fff"
        route="/collections/executive-collection"
        imgUrlDesktop="/assets/hero__desktop-executive-collection.jpg"
        imgUrlMobile="/assets/hero__mobile-executive-collection.jpg"
      /> */}

      {/* <ProductsSliderSection
        title="women's popular products"
        products={getPopularProducts("women")}
      /> */}

      {/* <SplitContentSection
        istextfirst={false}
        title="give $10, get $10"
        text="Give your friends $10 off their first purchase and get $10 in points when they spend $50 or more."
        route="/pages/rewards"
        imgUrl="/assets/split-content-img-2.jpg"
      /> */}

      <DiscountSubscriptionForm />
    </main>
  );
}
