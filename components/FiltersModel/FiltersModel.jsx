import classes from './FiltersModel.module.scss';
import { CloseIcon } from '../../Icons';
import { FiltersValue } from '..';

const FiltersModel = ({ products, openFiltersModel, setOpenFiltersModel }) => {
  return (
    <div
      className={`${
        openFiltersModel ? 'filtersModel filtersModel__show' : 'filtersModel'
      }`}>
      <div className={classes.filtersModel__header}>
        <h3 className={classes.title}>filters</h3>
        <button
          className={classes.closeBtn}
          onClick={() => setOpenFiltersModel(false)}>
          <CloseIcon />
        </button>
      </div>
      <FiltersValue products={products} />
    </div>
  );
};

export default FiltersModel;
