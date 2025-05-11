import CloseIcon from "../../Icons/CloseIcon";
import FiltersValue from "../FiltersValue/FiltersValue";
import classes from "./FiltersModal.module.scss";

type FiltersModalProps = {
  setOpenFiltersModal: React.Dispatch<React.SetStateAction<boolean>>;
};

/**
 * Renders a modal component for filters.
 *
 * @param {Object} props - The component props.
 * @param {Function} props.setOpenFiltersModal - A function to control the visibility of the filters modal.
 * @returns {JSX.Element} The rendered FiltersModal component.
 */
function FiltersModal({ setOpenFiltersModal }: FiltersModalProps): JSX.Element {
  return (
    <div className={classes.filtersModal}>
      <div className={classes.filtersModal__header}>
        <h3 className={classes.title}>filters</h3>
        <button
          type="button"
          className={classes.closeBtn}
          onClick={() => setOpenFiltersModal(false)}
        >
          <CloseIcon />
        </button>
      </div>
      <FiltersValue />
    </div>
  );
}

export default FiltersModal;
