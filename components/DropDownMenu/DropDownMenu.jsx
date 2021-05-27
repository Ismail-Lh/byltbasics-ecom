import classes from './DropDownMenu.module.scss';

const DropDownMenu = ({
  collections,
  productsCategories,
  productsTypes,
  imgUrl,
  gender,
  showDropMenu,
}) => {
  return (
    <div
      className={`${
        showDropMenu ? 'dropDowMenu dropDownMenu__show' : 'dropDownMenu '
      }`}>
      <div className='container'>
        <div className={classes.dropDownMenu__grid}>
          <div className={classes.dropDownMenu__collections}>
            <h1>{gender}</h1>
          </div>
          <div className={classes.dropDownMenu__categories}></div>
          <div className={classes.dropDownMenu__image}></div>
        </div>
      </div>
    </div>
  );
};

export default DropDownMenu;
