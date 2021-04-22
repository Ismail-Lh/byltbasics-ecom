import classes from './SplitContentIcons.module.scss';

import { AthleticIcon, ShrinkIcon, WrinkleIcon } from '../../Icons';

const SplitContentIcons = ({ isTextFirst }) => {
  return (
    <div className={classes.split__content_icons}>
      {isTextFirst ? (
        <>
          <div className={classes.split__content_icon}>
            <WrinkleIcon />
            <span>wrinkle free</span>
          </div>

          <div className={classes.split__content_icon}>
            <ShrinkIcon />
            <span>no shrink</span>
          </div>

          <div className={classes.split__content_icon}>
            <AthleticIcon />
            <span>athletic fit</span>
          </div>
        </>
      ) : (
        <h1>hello World</h1>
      )}
    </div>
  );
};

export default SplitContentIcons;
