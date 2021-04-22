import classes from './SplitContentImageContainer.module.scss';

const SplitContentImageContainer = ({ imgUrl }) => {
  return (
    <div
      style={{ backgroundImage: `url(${imgUrl})` }}
      className={classes.split__content_img}
    />
  );
};

export default SplitContentImageContainer;
