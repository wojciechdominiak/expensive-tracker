import { useRef, useState } from "react";
import styles from "./Login.module.css";

const Login = (props) => {
  const email = useRef();
  const password = useRef();
  const [error, setError] = useState();

  const errorHandler = () => {
    setError(null);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (
      email.current.value.trim().length === 0 ||
      password.current.value.trim().length < 5
    ) {
      setError({
        message: "Please enter valid login and password",
      });
      return;
    }
    props.onLogin(email.current.value, password.current.value);
    email.current.value = "";
    password.current.value = "";
    errorHandler();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={styles["login"]}>
        {error && (
          <div className={styles["login__error"]}> {error.message}</div>
        )}
        <div className={styles["login__controls"]}>
          <div className={styles["login__control"]}>
            <label htmlFor="email">Email: </label>
            <input id="email" type="email" ref={email}></input>
          </div>
          <div className={styles["login__control"]}>
            <label htmlFor="password">password: </label>
            <input id="password" type="password" ref={password}></input>
            <div className={styles["login__actions"]}>
              <button type="submit">Login</button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Login;
