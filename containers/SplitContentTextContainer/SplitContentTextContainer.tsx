import classes from "./SpiltContentTextContainer.module.scss";

import { MyLink, SplitContentIcons, SplitContentText } from "../../components";

const SplitContentTextContainer = ({ title, text, istextfirst, route }) => {
  return (
    <div className={classes.split__content_text}>
      <div>
        <SplitContentText title={title} text={text} />

        <MyLink route={route}>load more</MyLink>

        <SplitContentIcons istextfirst={istextfirst} />
      </div>
    </div>
  );
};

export default SplitContentTextContainer;
