import classes from './Overlay.module.scss';

const Overlay = ({ children, handelClick, showMenu }) => {
  return (
    <div
      className={`${showMenu ? classes.overlay : classes.overlay__hide}`}
      onClick={() => handelClick()}>
      {children}
    </div>
  );
};

export default Overlay;
