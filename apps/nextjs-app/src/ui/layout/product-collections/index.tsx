import { ProductCollectionCard } from "./components";
import styles from "./styles.module.scss";

export interface IProductCollection {
  id: string;
  collection: string;
  imgUrl: string;
  route: string;
}
interface ProductCollectionsProps {
  collections: IProductCollection[];
}

/**
 * Renders the product collections section.
 *
 * @param {ProductCollectionsProps} props - The component props.
 * @param {Array<IProductCollections>} props.collections - The array of product collections to display.
 */

export function ProductCollectionsSection({
  collections,
}: ProductCollectionsProps) {
  return (
    <section className="container">
      <div className={styles.product__collections}>
        {collections.map(({ id, collection, imgUrl, route }) => (
          <ProductCollectionCard
            key={id}
            collection={collection}
            imgUrl={imgUrl}
            route={route}
          />
        ))}
      </div>
    </section>
  );
}
