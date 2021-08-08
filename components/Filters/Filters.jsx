import { useMediaQuery } from '@react-hook/media-query';

import classes from './Filters.module.scss';
import { FiltersModel, FiltersValue } from '..';
import { useState } from 'react';
import { AngleRightIcon } from '../../Icons';

const Filters = () => {
  const matchesMedia = useMediaQuery('only screen and (max-width: 768px)');

  const [openFiltersModel, setOpenFiltersModel] = useState(false);

  const FiltersContainer = ({ children, handelClick }) => (
    <div
      className={classes.filters}
      onClick={() => handelClick && handelClick()}>
      <h3 className={classes.filters__title}>filters</h3>
      {children}
    </div>
  );

  return (
    <>
      {!matchesMedia ? (
        <FiltersContainer>
          <FiltersValue />
        </FiltersContainer>
      ) : (
        <>
          <FiltersContainer handelClick={() => setOpenFiltersModel(true)}>
            <AngleRightIcon />
          </FiltersContainer>

          <FiltersModel
            openFiltersModel={openFiltersModel}
            setOpenFiltersModel={setOpenFiltersModel}
          />
        </>
      )}
    </>
  );
};

export default Filters;
