import Button from "../../components/Button/Button";
import classes from "./PageNotFoundContainer.module.scss";

/**
 * Renders the page not found container.
 *
 * @returns The JSX element representing the page not found container.
 */

function PageNotFoundContainer() {
  return (
    <div className={classes.pageContainer}>
      <div className="container">
        <div className={classes.pageContainer__content}>
          <h1>404 page not found</h1>
          <p>We're sorry, but the page you requested could not be found.</p>
          <Button route="/">go to the home page</Button>
        </div>
      </div>
    </div>
  );
}

export default PageNotFoundContainer;
