import classes from "./ProductsCategorySection.module.scss";

import { ProductsCategoryCard } from "../../components";
import type { ProductsCategories } from "../../types";

type ProductsCategorySectionProps = {
  productsCategories: ProductsCategories[];
};

const ProductsCategorySection = ({
  productsCategories,
}: ProductsCategorySectionProps) => {
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
};

export default ProductsCategorySection;
