import AthleticIcon from "../../Icons/AthleticIcon";
import FriendsIcon from "../../Icons/FriendsIcon";
import MoneyIcon from "../../Icons/MoneyIcon";
import ShrinkIcon from "../../Icons/ShrinkIcon";
import WrinkleIcon from "../../Icons/WrinkleIcon";
import classes from "./SplitContentIcons.module.scss";

type SplitContentIconsProps = {
  istextfirst: boolean;
};

/**
 * Renders a component that displays split content icons based on the `istextfirst` prop.
 *
 * @param {SplitContentIconsProps} props - The props for the SplitContentIcons component.
 * @returns {JSX.Element} The rendered SplitContentIcons component.
 */

function SplitContentIcons({
  istextfirst,
}: SplitContentIconsProps): JSX.Element {
  return (
    <div className={classes.split__content_icons}>
      {istextfirst ? (
        <>
          <div className={classes.split__content_icon_1}>
            <WrinkleIcon />
            <span>wrinkle free</span>
          </div>

          <div className={classes.split__content_icon_1}>
            <ShrinkIcon />
            <span>no shrink</span>
          </div>

          <div className={classes.split__content_icon_1}>
            <AthleticIcon />
            <span>athletic fit</span>
          </div>
        </>
      ) : (
        <div className={classes.split__content_icon_2}>
          <FriendsIcon />
          <p> =</p>
          <MoneyIcon />
        </div>
      )}
    </div>
  );
}

export default SplitContentIcons;
