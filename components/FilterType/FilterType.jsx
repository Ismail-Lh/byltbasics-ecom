import { useState } from 'react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import classes from './FilterType.module.scss';

import { useFiltersContext } from '../../contexts/filters_context';

const FilterType = ({ type, title }) => {
  const { filtered_products: products, updateFilters } = useFiltersContext();
  const [toggleAccordion, setToggleAccordion] = useState(false);

  const filtersValue = [...new Set(products.map(product => product[type]))];
  const gender = [...new Set(products.map(product => product.gender))];

  return (
    <div className={classes.filter__type}>
      <div
        className={classes.filter__type_title}
        onClick={() => setToggleAccordion(!toggleAccordion)}>
        <h3>{title}</h3>
        {!toggleAccordion ? <FaAngleDown /> : <FaAngleUp />}
      </div>

      {toggleAccordion && (
        <div className={classes.filter__type_value}>
          {filtersValue.map((value, idx) => (
            <div key={idx} onClick={() => updateFilters(type, value)}>
              <img
                src={`/assets/filters/${gender[0]}/${type}/${value}.png`}
                alt={value}
              />
              <h4>{value}</h4>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterType;
