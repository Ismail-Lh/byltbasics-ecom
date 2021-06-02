import { FilterType } from '..';
import classes from './Filters.module.scss';

const Filters = () => {
  return (
    <div className={classes.filters}>
      <h3 className={classes.filters__title}>filters</h3>
      <FilterType type='collections' title='collections' />
      <FilterType type='cut' title='cut' />
      <FilterType type='neck' title='neck' />
      <FilterType type='sleeve' title='sleeve' />
      <FilterType type='fabric' title='fabric' />
    </div>
  );
};

export default Filters;
