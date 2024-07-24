import classes from './SpiltContentTextContainer.module.scss';

import { SplitContentText, SplitContentIcons, MyLink } from '../../components';

const SplitContentTextContainer = ({ title, text, isTextFirst, route }) => {
  return (
    <div className={classes.split__content_text}>
      <div>
        <SplitContentText title={title} text={text} />

        <MyLink route={route}>load more</MyLink>

        <SplitContentIcons isTextFirst={isTextFirst} />
      </div>
    </div>
  );
};

export default SplitContentTextContainer;
