import { useRef } from "react";
import styles from "./Login.module.css";

const Login = (props) => {
  const email = useRef();
  const password = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(email.current.value, password.current.value);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={styles["login"]}>
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
