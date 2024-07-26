import { Fragment, useState } from "react";
import classes from "./FilterType.module.scss";

import AngleDownIcon from "../../Icons/AngleDownIcon";
import AngleUpIcon from "../../Icons/AngleUpIcon";
import { useFiltersContext } from "../../contexts/filters_context";
import type { Product } from "../../types";

import { v4 as uuidv4 } from "uuid";

type FilterTypeProps = {
  title: string;
  products: Product[];
};

/**
 * Renders a filter type component.
 *
 * @param {Object} props - The component props.
 * @param {string} props.title - The title of the filter type.
 * @param {Array} props.products - The array of products.
 * @returns {JSX.Element} The filter type component.
 */
function FilterType({ title, products }: FilterTypeProps): JSX.Element {
  const { updateFilters } = useFiltersContext();
  const [toggleAccordion, setToggleAccordion] = useState(false);

  const filtersValue = [
    ...new Set(products?.map((product) => product.name === title)),
  ];

  return (
    <div className={classes.filter__type}>
      <div
        className={classes.filter__type_title}
        onClick={() => setToggleAccordion(!toggleAccordion)}
      >
        <h3>{title}</h3>
        {!toggleAccordion ? <AngleDownIcon /> : <AngleUpIcon />}
      </div>

      {toggleAccordion && (
        <div className={classes.filter__type_value}>
          {filtersValue.map((value) => (
            <Fragment key={uuidv4()}>
              {value !== undefined && (
                <div onClick={() => updateFilters(title, value)}>
                  <img
                    src={`/assets/filters/${title}/${value}.png`}
                    alt={title}
                  />
                  <h4>{value}</h4>
                </div>
              )}
            </Fragment>
          ))}
        </div>
      )}
    </div>
  );
}

export default FilterType;
