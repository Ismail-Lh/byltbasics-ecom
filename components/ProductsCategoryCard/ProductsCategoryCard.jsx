import classes from './ProductsCategoryCard.module.scss';

import { Button } from '../../components';

const ProductsCategoryCard = ({ category, imgUrl, route }) => {
  return (
    <div className={classes.card} style={{ backgroundImage: `url(${imgUrl})` }}>
      <h3 className={classes.card__title}>{category}</h3>
      <Button route={route} color='white'>
        shop now
      </Button>
    </div>
  );
};

export default ProductsCategoryCard;
