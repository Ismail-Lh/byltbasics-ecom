import classes from './HeroTitle.module.scss';

const HeroTitle = ({ title, color }) => {
  return (
    <h1
      className={classes.hero__title}
      style={{ color: `${color === 'white' ? '#fff' : '#25293b'}` }}>
      {title}
    </h1>
  );
};

export default HeroTitle;
