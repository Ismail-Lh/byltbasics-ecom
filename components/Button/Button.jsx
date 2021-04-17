import Link from 'next/link';

import classes from './Button.module.scss';

const Button = ({ route, color, children }) => {
  const styles = clr => {
    let btnStyles;

    if (clr === '#fff') {
      btnStyles = {
        color: '#29527c',
        backgroundColor: '#fff',
        borderColor: '#fff',

        '&:hover': {
          color: '#fff',
          backgroundColor: '#29527c',
        },
      };
    }

    return btnStyles;
  };

  return (
    <Link href={route}>
      <a className={classes.btn} style={styles(color)}>
        {children}
      </a>
    </Link>
  );
};

export default Button;
