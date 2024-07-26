import { useState } from "react";
import classes from "./FilterType.module.scss";

import { AngleDownIcon, AngleUpIcon } from "../../Icons";
import { useFiltersContext } from "../../contexts/filters_context";

const FilterType = ({ title, products }) => {
  const { updateFilters } = useFiltersContext();
  const [toggleAccordion, setToggleAccordion] = useState(false);

  const filtersValue = [...new Set(products?.map((product) => product[title]))];

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
            <Fragment key={value}>
              {value !== undefined && (
                <div onClick={() => updateFilters(title, value)}>
                  <img
                    src={`/assets/filters/${title}/${value}.png`}
                    alt={value}
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
};

export default FilterType;
