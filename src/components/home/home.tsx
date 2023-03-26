import { useState } from "react";
import { LogIn } from "../login/login";
import { Register } from "../register/register";
import styles from "./home.module.scss";
export function Home() {
  const [isInLogin, setIsInLogin] = useState(false);

  const handlerChange = (condition: boolean) => {
    setIsInLogin(condition);
  };

  return (
    <>
      <img
        className={styles.image}
        src="../../../start.png"
        alt="imagen general"
      />
      <button className={styles.register} onClick={() => handlerChange(false)}>
        Register
      </button>
      <button onClick={() => handlerChange(true)}>Login</button>
      <LogIn></LogIn> <Register></Register>
    </>
  );
}
export default Home;
