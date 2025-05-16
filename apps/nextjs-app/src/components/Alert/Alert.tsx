import type { ReactNode } from "react";

type AlertProps = {
  error?: boolean;
  children: ReactNode;
};

function Alert({ error, children }: AlertProps) {
  return (
    <div className={`${error ? "alert alert__error" : "alert alert__success"}`}>
      <p>{children}</p>
    </div>
  );
}

export default Alert;
