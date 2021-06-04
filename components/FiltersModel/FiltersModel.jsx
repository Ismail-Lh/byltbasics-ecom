import classes from './FiltersModel.module.scss';
import { CloseIcon } from '../../Icons';

const FiltersModel = ({
  FiltersType,
  openFiltersModel,
  setOpenFiltersModel,
}) => {
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
      <FiltersType />
    </div>
  );
};

export default FiltersModel;
