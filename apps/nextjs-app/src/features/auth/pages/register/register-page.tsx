import { RegisterForm } from "../../components/forms";
import styles from "./register-page.module.scss";

export function RegisterPage() {
  return (
    <div className={styles.register}>
      <div className="container">
        {/* {loading ? (
        <Loader message="please wait until your account is created..." />
      ) : ( */}
        <div className={styles.register__container}>
          <h1 className={styles.register__title}>create account</h1>
          {/* {err && <Alert error>{err}</Alert>} */}
          <RegisterForm />

          {/* <MyLink route="/login">back to login</MyLink> */}
        </div>
        {/* )} */}
      </div>
    </div>
  );
}
