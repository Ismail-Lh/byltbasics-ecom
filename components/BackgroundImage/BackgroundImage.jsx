import { useEffect, useState } from 'react';
import { useFiltersContext } from '../../contexts/filters_context';
import classes from './BackgroundImage.module.scss';

const BackgroundImage = () => {
  const { collection } = useFiltersContext();

  const [imgSrc, setImgSrc] = useState('');
  const [title, setTitle] = useState('');

  useEffect(() => {
    setImgSrc(collection.route);
    setTitle(collection.title);
  }, [collection]);

  return (
    <div
      className={classes.backgroundImage}
      style={{ backgroundImage: `url(/assets/${imgSrc}.jpg)` }}>
      <h1 className={classes.backgroundImage__title}>{title}</h1>
    </div>
  );
};

export default BackgroundImage;
