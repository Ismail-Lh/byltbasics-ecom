import classes from './BackgroundImage.module.scss';

const BackgroundImage = ({ imgSrc, title }) => {
  return (
    <div
      className={classes.backgroundImage}
      style={{ backgroundImage: `url(/assets/${imgSrc})` }}>
      <h1 className={classes.backgroundImage__title}>{title}</h1>
    </div>
  );
};

export default BackgroundImage;
