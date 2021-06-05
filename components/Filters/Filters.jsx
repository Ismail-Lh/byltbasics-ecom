import { useMediaQuery } from '@react-hook/media-query';
import { FaAngleRight } from 'react-icons/fa';

import classes from './Filters.module.scss';
import { FiltersModel, FiltersValue } from '..';
import { useState } from 'react';

const Filters = ({ products }) => {
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
          <FiltersValue products={products} />
        </FiltersContainer>
      ) : (
        <>
          <FiltersContainer handelClick={() => setOpenFiltersModel(true)}>
            <FaAngleRight />
          </FiltersContainer>

          <FiltersModel
            openFiltersModel={openFiltersModel}
            setOpenFiltersModel={setOpenFiltersModel}
            products={products}
          />
        </>
      )}
    </>
  );
};

export default Filters;
