import { useMediaQuery } from "@react-hook/media-query";
import dynamic from "next/dynamic";
import { useState } from "react";

import classes from "./Filters.module.scss";

import AngleRightIcon from "../../Icons/AngleRightIcon";

const DynamicFiltersModal = dynamic(
  () => import("../FiltersModal/FiltersModal"),
);

import FiltersValue from "../FiltersValue/FiltersValue";

type FiltersContainerProps = {
  children?: React.ReactNode;
  handelClick?: () => void;
};

/**
 * Renders the Filters component.
 * This component displays filters and handles the logic for opening the filters modal.
 */
function Filters() {
  const matchesMedia = useMediaQuery("only screen and (max-width: 768px)");

  const [openFiltersModal, setOpenFiltersModal] = useState(false);

  const FiltersContainer = ({
    children,
    handelClick,
  }: FiltersContainerProps) => (
    <div className={classes.filters} onClick={() => handelClick?.()}>
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
          <FiltersContainer handelClick={() => setOpenFiltersModal(true)}>
            <AngleRightIcon />
          </FiltersContainer>

          {openFiltersModal && (
            <DynamicFiltersModal setOpenFiltersModal={setOpenFiltersModal} />
          )}
        </>
      )}
    </>
  );
}

export default Filters;
