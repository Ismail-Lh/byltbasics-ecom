import { LoginForm } from "../../components/forms";
import styles from "./login-page.module.scss";

export function LoginPage() {
  return (
    <div className={styles.login__container}>
      <div className="container">
        <div className={styles.login__grid}>
          <h1>registered customers</h1>
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
