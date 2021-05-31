import classes from './ShopMenPageContainer.module.scss';

import { BackgroundImage } from '../../components';

const ShopMenPageContainer = () => {
  return (
    <div>
      <div className={classes.backgroundImage}>
        <BackgroundImage imgSrc='shop-men.png' title='all men' />
      </div>
    </div>
  );
};

export default ShopMenPageContainer;
