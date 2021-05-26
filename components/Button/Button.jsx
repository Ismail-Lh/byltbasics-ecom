import Link from 'next/link';

import classes from './Button.module.scss';

const Button = ({ route, color, handelClick, children }) => {
  return (
    <>
      {!route ? (
        <button
          className={`${
            color === 'white' ? classes.btn__white : classes.btn__black
          }`}
          onClick={handelClick}>
          {children}
        </button>
      ) : (
        <Link href={route}>
          <a
            className={`${
              color === 'white' ? classes.btn__white : classes.btn__black
            }`}>
            {children}
          </a>
        </Link>
      )}
    </>
  );
};

export default Button;
