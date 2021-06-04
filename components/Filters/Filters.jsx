import { useMediaQuery } from '@react-hook/media-query';
import { FaAngleRight } from 'react-icons/fa';

import classes from './Filters.module.scss';
import { useFiltersContext } from '../../contexts/filters_context';
import { Button, FiltersModel, FilterType } from '..';
import { useState } from 'react';

const Filters = () => {
  const { clearFilters } = useFiltersContext();
  const matchesMedia = useMediaQuery('only screen and (max-width: 768px)');

  const [openFiltersModel, setOpenFiltersModel] = useState(false);

  const FiltersType = () => (
    <>
      <FilterType type='collections' title='collections' />
      <FilterType type='style' title='style' />
      <FilterType type='cut' title='cut' />
      <FilterType type='neck' title='neck' />
      <FilterType type='sleeve' title='sleeve' />
      <FilterType type='fabric' title='fabric' />

      <div className={classes.filters__clear}>
        <Button color='black' handelClick={clearFilters}>
          clear filters
        </Button>
      </div>
    </>
  );

  return (
    <>
      {!matchesMedia ? (
        <div className={classes.filters}>
          <h3 className={classes.filters__title}>filters</h3>
          <FiltersType />
        </div>
      ) : (
        <>
          <div
            className={classes.filters}
            onClick={() => setOpenFiltersModel(true)}>
            <h3 className={classes.filters__title}>filters</h3>
            <FaAngleRight />
          </div>

          <FiltersModel
            FiltersType={FiltersType}
            openFiltersModel={openFiltersModel}
            setOpenFiltersModel={setOpenFiltersModel}
          />
        </>
      )}
    </>
  );
};

export default Filters;
