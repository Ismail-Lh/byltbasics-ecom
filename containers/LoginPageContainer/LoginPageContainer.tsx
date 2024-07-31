import dynamic from "next/dynamic";

import classes from "./LoginPageContainer.module.scss";

const Login = dynamic(() => import("../../components/Login/Login"));

/**
 * Renders the container component for the login page.
 *
 * @returns The JSX element representing the login page container.
 */

function LoginPageContainer() {
  return (
    <div className={classes.login__container}>
      <div className="container">
        <div className={classes.login__grid}>
          <Login />
        </div>
      </div>
    </div>
  );
}

export default LoginPageContainer;
