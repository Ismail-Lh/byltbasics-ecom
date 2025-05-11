import dynamic from "next/dynamic";

import classes from "./ShopPageContainer.module.scss";

const BackgroundImage = dynamic(
  () => import("../../components/BackgroundImage/BackgroundImage"),
);
const CollectionsContainer = dynamic(
  () => import("../CollectionsContainer/CollectionsContainer"),
);

/**
 * Renders the container component for the shop page.
 *
 * @returns The JSX element representing the shop page container.
 */

function ShopPageContainer() {
  return (
    <div>
      <div className={classes.backgroundImage}>
        <BackgroundImage />
      </div>

      <CollectionsContainer />
    </div>
  );
}

export default ShopPageContainer;
