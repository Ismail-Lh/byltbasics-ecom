import styles from "./styles.module.scss";

export function DiscountSubscriptionForm() {
  return (
    <div className={styles.discount__form}>
      <div className={styles.discount__form_text}>
        <h2>save up to</h2>
        <h1>20% off</h1>
      </div>

      <div className={styles.discount__form_input}>
        <p className={styles.text}>
          Upgrade your style with Premium Basics. Sign up now for up to 20% Off!
        </p>
        <form className={styles.form}>
          <input
            type="text"
            placeholder="Email address"
            className={styles.form__ipt}
          />
          <button type="submit" className={styles.form__btn}>
            submit
          </button>
        </form>
      </div>
    </div>
  );
}
