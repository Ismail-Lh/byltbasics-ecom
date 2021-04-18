import Link from 'next/link';

import classes from './Button.module.scss';

const Button = ({ route, color, children }) => {
  return (
    <Link href={route}>
      <a
        className={`${
          color === 'white' ? classes.btn__white : classes.btn__black
        }`}>
        {children}
      </a>
    </Link>
  );
};

export default Button;
