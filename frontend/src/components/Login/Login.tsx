import { useRouter } from "next/router";
import { useState } from "react";
import classes from "./Login.module.scss";

import { useAuthContext } from "../../contexts/auth_context";
import useForm from "../../hooks/useForm";
import Alert from "../Alert/Alert";
import Button from "../Button/Button";
import FormInput from "../FormInput/FormInput";
import Loader from "../Loader/Loader";
import MyLink from "../MyLink/MyLink";

/**
 * Renders the login component.
 *
 * @returns The login component.
 */
function Login() {
  const { value, error, handleChange } = useForm();
  const loading = false;
  // const { login, resetPassword, err, setErr, loading, setLoading } =
  //   useAuthContext();

  const router = useRouter();

  const [isResetPassword, setIsResetPassword] = useState(false);
  const [message, setMessage] = useState("");

  const handleLogin = async () => {
    // e.preventDefault();
    // handleSubmit();
    // try {
    //   setErr("");
    //   setLoading(true);
    //   await login(value.email, value.password);
    //   router.push("/account");
    // } catch (error) {
    //   setErr(error.message);
    // }
    // setLoading(false);
  };

  const handleReset = async () => {
    // e.preventDefault();
    // try {
    //   setErr("");
    //   setMessage("");
    //   setLoading(true);
    //   await resetPassword(value.email);
    //   setLoading(false);
    //   setMessage("check your email inbox for more information.");
    // } catch (error) {
    //   setErr(error.message);
    // }
  };

  const setResetPassword = (value: string) => {
    // setErr("");
    // setIsResetPassword(value);
  };

  return (
    <div className={classes.login}>
      {!isResetPassword ? (
        <>
          {loading ? (
            <Loader message="please wait until your login..." />
          ) : (
            <>
              <h1>registered customers</h1>
              {/* {err && <Alert error> {err}</Alert>} */}
              <form className={classes.login__form} onSubmit={handleLogin}>
                <FormInput
                  name="email"
                  id="email"
                  placeholder="email address"
                  handleChange={handleChange}
                  value={value.email}
                  error={error.email}
                />
                <FormInput
                  type="password"
                  name="password"
                  id="password"
                  placeholder="password"
                  handleChange={handleChange}
                  value={value.password}
                  error={error.password}
                />

                <Button type="submit" color="black">
                  login
                </Button>
              </form>

              <div className={classes.login__create}>
                <MyLink
                  route="/account/register"
                  // handelClick={() => setErr("")}
                >
                  create an account
                </MyLink>
                <button
                  className={classes.btn}
                  type="button"
                  // onClick={() => setResetPassword(true)}
                >
                  forgot your password?
                </button>
              </div>
            </>
          )}
        </>
      ) : (
        <>
          {loading ? (
            <Loader message="please wait until your password is reset..." />
          ) : (
            <>
              <h1>reset password</h1>
              {/* {err && <Alert error> {err}</Alert>} */}

              {message && <Alert>{message}</Alert>}
              <p className={classes.resetText}>
                Please enter your email address below. You will receive a link
                to reset your password.
              </p>

              <form className={classes.login__form} onSubmit={handleReset}>
                <FormInput
                  name="email"
                  id="email"
                  placeholder="email address"
                  handleChange={handleChange}
                  value={value.email}
                  error={error.email}
                />

                <Button type="submit" color="black">
                  submit
                </Button>
              </form>

              <button
                className={classes.btn}
                type="button"
                // onClick={() => setResetPassword(false)}
              >
                cancel
              </button>
            </>
          )}
        </>
      )}
    </div>
  );
}

export default Login;
