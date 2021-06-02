import { Button, FilterType } from '..';
import { useFiltersContext } from '../../contexts/filters_context';

import classes from './Filters.module.scss';

const Filters = () => {
  const { clearFilters } = useFiltersContext();

  return (
    <div className={classes.filters}>
      <h3 className={classes.filters__title}>filters</h3>

      <FilterType type='collections' title='collections' />
      <FilterType type='cut' title='cut' />
      <FilterType type='neck' title='neck' />
      <FilterType type='sleeve' title='sleeve' />
      <FilterType type='fabric' title='fabric' />

      <div className={classes.filters__clear}>
        <Button color='black' handelClick={clearFilters}>
          clear filters
        </Button>
      </div>
    </div>
  );
};

export default Filters;
