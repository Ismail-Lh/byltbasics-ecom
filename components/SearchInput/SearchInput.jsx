import { useProductsContext } from '../../contexts/products_context';
import { CloseIcon } from '../../Icons';
import MyLink from '../MyLink/MyLink';
import classes from './SearchInput.module.scss';

const SearchInput = ({ closeSearchBar }) => {
  const { men_products, women_products, getSingleProduct } =
    useProductsContext();

  const allProducts = [...men_products, ...women_products];

  return (
    <div className={classes.search}>
      <div className={classes.search__input}>
        <input type='text' placeholder='search' />

        <button onClick={() => closeSearchBar(false)}>
          <CloseIcon />
        </button>
      </div>

      <div className={classes.search__results}>
        {allProducts.map(({ name, id, route, gender, colors }) => (
          <div onClick={() => getSingleProduct(id, gender, colors[0])}>
            <MyLink
              key={id}
              route={`/products/${route}/?gender=${gender}&id=${id}`}>
              {name}
            </MyLink>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchInput;
