import classes from './SplitContentTitle.module.scss';

const SplitContentTitle = ({ title }) => {
  return <h2 className={classes.split__content_title}>{title}</h2>;
};

export default SplitContentTitle;
