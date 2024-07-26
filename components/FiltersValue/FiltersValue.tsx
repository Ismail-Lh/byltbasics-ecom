import classes from "./FiltersValue.module.scss";

import { useFiltersContext } from "../../contexts/filters_context";
import Button from "../Button/Button";
import FilterType from "../FilterType/FilterType";

/**
 * Renders the filters and clear filters button.
 */
function FiltersValue() {
  const { products, clearFilters } = useFiltersContext();

  const productsObject = Object.assign({}, ...products);

  const productsKey = Object.keys(productsObject);

  const substrings = [
    "collections",
    "style",
    "cut",
    "fabric",
    "sleeve",
    "neck",
  ];

  const containsAny = (keys: string[], substrings: string[]) => {
    const key = keys.map((key) => {
      for (let i = 0; i !== substrings.length; i++) {
        const filtersTitle = [];
        const str = substrings[i];

        if (key.includes(str)) {
          filtersTitle.push(key);

          return filtersTitle;
        }
      }
    });

    return [].concat(...key);
  };

  const filtersTitle = containsAny(productsKey, substrings)
    .filter((key: string) => key !== undefined)
    .sort((a: string, b: string) => a.localeCompare(b));

  return (
    <>
      {filtersTitle.map((title) => (
        <FilterType key={title} title={title} products={products} />
      ))}

      <div className={classes.filters__clear}>
        <Button color="black" handelClick={clearFilters}>
          clear filters
        </Button>
      </div>
    </>
  );
}

export default FiltersValue;
