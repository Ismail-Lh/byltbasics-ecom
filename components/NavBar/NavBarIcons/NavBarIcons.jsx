import { useRef, useState } from 'react';
import classes from './NavBarIcons.module.scss';

import { MyLink } from '../../../components';
import { Icons } from '../../../utils/constants';

const NavBarIcons = () => {
  const [showInput, setShowInput] = useState(false);

  const toggleInput = () => setShowInput(!showInput);

  return (
    <div className={classes.navbar__icons}>
      {showInput && (
        <form className={classes.navbar__form}>
          <input type='text' placeholder='search' />
        </form>
      )}

      {Icons.map(({ id, icon, route, search }) => (
        <MyLink route={route} key={id} handelClick={search && toggleInput}>
          {icon}
        </MyLink>
      ))}
    </div>
  );
};

export default NavBarIcons;
