import classes from './ProductsCategoryCard1.module.scss';

import { Button } from '..';

const ProductsCategoryCardV1 = ({ category, imgUrl, route }) => {
  return (
    <div className={classes.card} style={{ backgroundImage: `url(${imgUrl})` }}>
      <h3 className={classes.card__title}>{category}</h3>
      <Button route={route} color='white'>
        shop now
      </Button>
    </div>
  );
};

export default ProductsCategoryCardV1;
