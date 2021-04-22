import classes from './SpiltContentTextContainer.module.scss';

import { SplitContentText, MyLink, SplitContentIcons } from '../../components';

const SplitContentTextContainer = ({ title, text, isTextFirst, route }) => {
  return (
    <div className={classes.split__content_text}>
      <SplitContentText title={title} text={text} />
      <MyLink route={route}>load more</MyLink>
      <SplitContentIcons isTextFirst={isTextFirst} />
    </div>
  );
};

export default SplitContentTextContainer;
