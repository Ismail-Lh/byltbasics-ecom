import { MyLink } from '..';
import { useFiltersContext } from '../../contexts/filters_context';
import classes from './DropDownMenu.module.scss';

const DropDownMenu = ({
  showDropMenu,
  collections,
  productsCategories,
  imageInfo,
}) => {
  const { updateCollection } = useFiltersContext();

  return (
    <div
      className={`${
        !showDropMenu ? 'dropDownMenu' : 'dropDownMenu dropDownMenu__show'
      }`}>
      <div className='container'>
        <div className={classes.dropDownMenu__grid}>
          <ul className={classes.dropDownMenu__collections}>
            {collections.map(({ id, collection, route }) => (
              <li
                key={id}
                onClick={e => {
                  e.stopPropagation();
                  updateCollection(collection);
                }}>
                <MyLink route={`/collections/${route}`}>{collection}</MyLink>
              </li>
            ))}
          </ul>
          <div className={classes.dropDownMenu__categories}>
            {productsCategories.map(({ id, productCategory, productTypes }) => (
              <div className={classes.category} key={id}>
                <h2
                  className={classes.category__title}
                  onClick={e => {
                    e.stopPropagation();
                    updateCollection(productCategory.category);
                  }}>
                  <MyLink route={`/collections/${productCategory.route}`}>
                    {productCategory.category}
                  </MyLink>
                </h2>
                <ul className={classes.category__type}>
                  {productTypes.map(({ id, type, route }) => (
                    <li
                      key={id}
                      onClick={e => {
                        e.stopPropagation();
                        updateCollection(type);
                      }}>
                      <MyLink route={`/collections/${route}`}>{type}</MyLink>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className={classes.dropDownMenu__image}>
            <MyLink route={imageInfo.route}>
              <img src={`/assets/${imageInfo.imgUrl}`} alt={imageInfo.title} />

              <div>
                <p className={classes.subtitle}>{imageInfo.subtitle}</p>
                <h2 className={classes.title}>{imageInfo.title}</h2>
              </div>
            </MyLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropDownMenu;
