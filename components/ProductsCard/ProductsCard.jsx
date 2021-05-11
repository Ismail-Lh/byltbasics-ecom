import { useState } from 'react';

import classes from './ProductsCard.module.scss';
import { MyLink } from '..';
import { formatPrice } from '../../utils/helpers';

const ProductsCard = ({
  name,
  price,
  colors,
  discountPer,
  category,
  images,
  type,
  gender,
}) => {
  const colorStyle = discountPer => {
    let style;

    style = { color: `${discountPer ? '#d84242' : '#000'}` };

    return style;
  };

  const [color, setColor] = useState(colors[0]);

  return (
    <div className={classes.card}>
      <div className={classes.card__image}>
        <MyLink route={`/products/${name}`}>
          <img
            src={`assets/products/${gender}/${category}/${type}/${name}/${color}/small/${images[0]}`}
            alt={`${name}-${color}`}
          />
        </MyLink>

        <button type='button'>quick add</button>

        {discountPer && (
          <img
            src='assets/sale-badge.svg'
            alt='sale-badge'
            className={classes.sale_badge}
          />
        )}
      </div>

      <div className={classes.card__info}>
        {discountPer && (
          <p className={classes.card__info_sale}>sale {discountPer}% off</p>
        )}

        <h2 className={classes.card__info_name}>
          <MyLink route={`/products/${name}`}>{name}</MyLink>
        </h2>

        <div className={classes.card__info_price}>
          <span className={classes.new} style={colorStyle(discountPer)}>
            {formatPrice(price, discountPer)} USD
          </span>{' '}
          {discountPer && (
            <span className={classes.old}>{formatPrice(price)} USD</span>
          )}
        </div>

        <div className={classes.card__info_colors}>
          <p>{color}</p>
          <div className={classes.colors}>
            {colors.map((clr, idx) => (
              <div key={idx} onClick={() => setColor(clr)}>
                <img
                  src={`assets/products/colors/${clr}.jpg`}
                  alt={clr}
                  className={`${clr === color && 'active-color'}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
