import { MyLink } from '..';

import classes from './ProductsCard.module.scss';

const ProductsCard = ({
  name,
  price,
  colors,
  discountPer,
  category,
  type,
  gender,
}) => {
  return (
    <div className={classes.card}>
      <div className={classes.card__image}>
        <MyLink route={`/products/${name}`}>
          <img
            src={`assets/products/${gender}/${category}/${type}/${name}/${colors[0]}/small/1.jpg`}
            alt={name}
          />
        </MyLink>

        <button type='button'>quick add</button>
      </div>

      <div className={classes.card__info}>
        <h2 className={classes.card__info_name}>
          <MyLink route={`/products/${name}`}>{name}</MyLink>
        </h2>

        <span className={classes.card__info_price}>{price}</span>
      </div>
    </div>
  );
};

export default ProductsCard;
