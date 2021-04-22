import classes from './SpiltContentTextContainer.module.scss';

import { SplitContentTitle } from '../../components';

const SplitContentTextContainer = ({ title, text, isTextFirst }) => {
  return (
    <div className={classes.split__content_text}>
      <SplitContentTitle title={title} />
    </div>
  );
};

export default SplitContentTextContainer;
