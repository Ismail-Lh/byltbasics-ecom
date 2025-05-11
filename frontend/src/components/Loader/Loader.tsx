import RingLoader from "react-spinners/RingLoader";

import classes from "./Loader.module.scss";

type LoaderProps = {
  message: string;
};

/**
 * Renders a loader component with a message.
 *
 * @param {LoaderProps} props - The props for the Loader component.
 * @param {string} props.message - The message to be displayed.
 * @returns {JSX.Element} The rendered Loader component.
 */
function Loader({ message }: LoaderProps): JSX.Element {
  return (
    <div className={classes.loader}>
      <RingLoader color="#29527c" size={100} />
      <p>{message}</p>
    </div>
  );
}

export default Loader;
