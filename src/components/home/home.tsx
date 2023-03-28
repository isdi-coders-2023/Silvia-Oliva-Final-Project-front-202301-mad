import { useState } from "react";
import Login from "../login/login";
import Register from "../register/register";
import styles from "./home.module.scss";

export default function Home() {
  const [isInLogin, setIsInLogin] = useState(false);

  const handlerChange = (condition: boolean) => {
    setIsInLogin(condition);
  };

  return (
    <div>
      <img
        className={styles.image}
        src="../../../start.png"
        alt="foto ovillos"
      />
      <button className={styles.register} onClick={() => handlerChange(false)}>
        Register
      </button>
      <button onClick={() => handlerChange(true)}>Login</button>
      {isInLogin ? <Login></Login> : <Register></Register>}
    </div>
  );
}
