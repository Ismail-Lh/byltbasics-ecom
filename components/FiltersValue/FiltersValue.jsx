import classes from './FiltersValue.module.scss';

import { useFiltersContext } from '../../contexts/filters_context';
import { filterTypes } from '../../utils/constants';
import { Button, FilterType } from '..';

const FiltersValue = ({ products }) => {
  const { clearFilters } = useFiltersContext();

  return (
    <>
      {filterTypes.map(({ id, type, title }) => (
        <FilterType key={id} type={type} title={title} products={products} />
      ))}

      <div className={classes.filters__clear}>
        <Button color='black' handelClick={clearFilters}>
          clear filters
        </Button>
      </div>
    </>
  );
};

export default FiltersValue;
