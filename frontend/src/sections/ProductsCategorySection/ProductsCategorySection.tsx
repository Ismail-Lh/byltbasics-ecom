import classes from "./ProductsCategorySection.module.scss";

import ProductsCategoryCard from "../../components/ProductsCategoryCard/ProductsCategoryCard";
import type { ProductsCategories } from "../../types";

type ProductsCategorySectionProps = {
  productsCategories: ProductsCategories[];
};

/**
 * Renders a section displaying product categories.
 *
 * @param {ProductsCategorySectionProps} props - The component props.
 * @param {Array<ProductCategory>} props.productsCategories - The array of product categories to display.
 * @returns {JSX.Element} The rendered component.
 */

function ProductsCategorySection({
  productsCategories,
}: ProductsCategorySectionProps): JSX.Element {
  return (
    <div className="container">
      <div className={classes.products__category_1}>
        {productsCategories.map(({ id, category, imgUrl, route }) => (
          <ProductsCategoryCard
            key={id}
            category={category}
            imgUrl={imgUrl}
            route={route}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductsCategorySection;
