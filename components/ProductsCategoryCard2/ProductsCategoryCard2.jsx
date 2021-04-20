import classes from './ProductsCategoryCard2.module.scss';

import { MyLink } from '../../components';

const ProductsCategoryCard2 = ({ category, imgUrl, route }) => {
  return (
    <div className={classes.card}>
      <MyLink route={route}>
        <img className={classes.card__img} src={imgUrl} alt={category} />
        <h4 className={classes.card__title}>{category}</h4>
      </MyLink>
    </div>
  );
};

export default ProductsCategoryCard2;
