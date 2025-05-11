import MyLink from "../../components/MyLink/MyLink";
import SplitContentIcons from "../../components/SplitContentIcons/SplitContentIcons";
import SplitContentText from "../../components/SplitContentText/SplitContentText";
import classes from "./SpiltContentTextContainer.module.scss";

type SplitContentTextContainerProps = {
  title: string;
  text: string;
  istextfirst: boolean;
  route: string;
};

/**
 * Renders a container component that displays split content with text and icons.
 *
 * @param {SplitContentTextContainerProps} props - The props for the SplitContentTextContainer component.
 * @returns {JSX.Element} The rendered SplitContentTextContainer component.
 */

function SplitContentTextContainer({
  title,
  text,
  istextfirst,
  route,
}: SplitContentTextContainerProps): JSX.Element {
  return (
    <div className={classes.split__content_text}>
      <div>
        <SplitContentText title={title} text={text} />

        <MyLink route={route}>load more</MyLink>

        <SplitContentIcons istextfirst={istextfirst} />
      </div>
    </div>
  );
}

export default SplitContentTextContainer;
