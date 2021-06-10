import { useState } from 'react';
import classes from './ProductsCard.module.scss';

import { useProductsContext } from '../../contexts/products_context';
import { formatPrice } from '../../utils/helpers';
import { MyLink } from '..';

const ProductsCard = ({ product }) => {
  const { getSingleProduct } = useProductsContext();
  const colorStyle = discountPer => {
    let style;

    style = { color: `${discountPer ? '#d84242' : '#000'}` };

    return style;
  };

  const [color, setColor] = useState(product?.colors[0]);

  const productRoute = `/products/${product?.route}/?gender=${product?.gender}&id=${product?.id}`;

  return (
    <div className={classes.card}>
      <div
        className={classes.card__image}
        onClick={() => getSingleProduct(product?.id, product?.gender, color)}>
        <MyLink route={productRoute}>
          <img
            src={`/assets/products/${product?.gender}/${product?.collections}/${product?.style}/${product?.name}/${color}/small/${product?.images[0]}`}
            alt={`${product?.name}-${color}`}
          />
        </MyLink>

        <button type='button'>quick add</button>

        {product?.discountPer && (
          <img
            src='/assets/sale-badge.svg'
            alt='sale-badge'
            className={classes.sale_badge}
          />
        )}
      </div>

      <div className={classes.card__info}>
        {product?.discountPer && (
          <p className={classes.card__info_sale}>
            sale {product?.discountPer}% off
          </p>
        )}

        <h2 className={classes.card__info_name}>
          <MyLink route={productRoute}>{product?.name}</MyLink>
        </h2>

        <div className={classes.card__info_price}>
          <span
            className={classes.new}
            style={colorStyle(product?.discountPer)}>
            {formatPrice(product?.price, product?.discountPer)} USD
          </span>{' '}
          {product?.discountPer && (
            <span className={classes.old}>
              {formatPrice(product?.price)} USD
            </span>
          )}
        </div>

        <div className={classes.card__info_colors}>
          <p>{color}</p>
          <div className={classes.colors}>
            {product?.colors?.map((clr, idx) => (
              <div key={idx} onClick={() => setColor(clr)}>
                <img
                  src={`/assets/products/colors/${clr}.jpg`}
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
