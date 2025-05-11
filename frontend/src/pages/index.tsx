import HeroImage from "../components/Hero/HeroImage/HeroImage";
import Layout from "../components/Layout/Layout";
// import { useProductsContext } from "../contexts/products_context";
import HeroSection from "../sections/HeroSection/HeroSection";
import ProductsCategorySection from "../sections/ProductsCategorySection/ProductsCategorySection";
import SplitContentSection from "../sections/SplitContentSection/SplitContentSection";
import { productsCategories } from "../utils/constants";

/**
 * Renders the home page of the application.
 *
 * @returns The JSX element representing the home page.
 */

export default function Home() {
  // const { popular_products } = useProductsContext();

  // const getPopularProducts = (gender: "men" | "women") => {
  //   const products: Product[] = popular_products
  //     ?.map((products: Product[]) => products[gender])
  //     .map((products: Product[]) => products);

  //   return products[0];
  // };

  return (
    <Layout>
      <HeroSection />

      <ProductsCategorySection
        productsCategories={productsCategories.slice(4)}
      />

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

      <HeroImage
        title="performance collection"
        subtitle="Pushing The Limits"
        color="#fff"
        route="/collections/performance-collection"
        imgUrlDesktop="/assets/hero__desktop-performance-collection.jpg"
        imgUrlMobile="/assets/hero__mobile-performance-collection.jpg"
      />

      <ProductsCategorySection
        productsCategories={productsCategories.slice(4)}
      />

      <SplitContentSection
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
      />

      {/* <ProductsSliderSection
        title="women's popular products"
        products={getPopularProducts("women")}
      /> */}

      <SplitContentSection
        istextfirst={false}
        title="give $10, get $10"
        text="Give your friends $10 off their first purchase and get $10 in points when they spend $50 or more."
        route="/pages/rewards"
        imgUrl="/assets/split-content-img-2.jpg"
      />
    </Layout>
  );
}
