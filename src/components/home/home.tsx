import { useState } from "react";
import { LogIn } from "../login/login";
import { Register } from "../register/register";
import style from "./card.style.module.scss";
export function Home() {
  const [isInLogin, setIsInLogin] = useState(false);

  const handlerChange = (condition: boolean) => {
    setIsInLogin(condition);
  };

  return (
    <>
      <div>
        <img src="../../../start.png" alt="imagen general" />
      </div>
      <h2>Home by home</h2>
      <button onClick={() => handlerChange(false)}>Register</button>
      <button onClick={() => handlerChange(true)}>Login</button>
      {isInLogin ? <LogIn></LogIn> : <Register></Register>}
    </>
  );
}
export default Home;
