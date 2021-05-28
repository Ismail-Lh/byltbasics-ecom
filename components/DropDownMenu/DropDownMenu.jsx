import { MyLink } from '..';
import classes from './DropDownMenu.module.scss';

const DropDownMenu = ({
  showDropMenu,
  collections,
  productsCategories,
  imageInfo,
  gender,
}) => {
  return (
    <div
      className={`${
        !showDropMenu ? 'dropDownMenu' : 'dropDownMenu dropDownMenu__show'
      }`}>
      <div className='container'>
        <div className={classes.dropDownMenu__grid}>
          <ul className={classes.dropDownMenu__collections}>
            {collections.map(({ id, collection, route }) => (
              <li key={id}>
                <MyLink route={route}>{collection}</MyLink>
              </li>
            ))}
          </ul>
          <div className={classes.dropDownMenu__categories}>
            {productsCategories.map(({ id, productCategory, productTypes }) => (
              <div className={classes.category} key={id}>
                <h2 className={classes.category__title}>
                  <MyLink route={`collections/${productCategory}`}>
                    {productCategory}
                  </MyLink>
                </h2>
                <ul className={classes.category__type}>
                  {productTypes.map((type, idx) => (
                    <li key={idx}>
                      <MyLink route={`collections/${type}`}>{type}</MyLink>
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
