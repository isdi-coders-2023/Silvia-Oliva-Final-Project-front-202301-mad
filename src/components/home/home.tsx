import { useState } from "react";
import LogIn from "../login/login";
import Register from "../register/register";

export function Home() {
  const [isInLogin, setIsInLogin] = useState(false);

  const handlerChange = (condition: boolean) => {
    setIsInLogin(condition);
  };

  return (
    <>
      <h2>Home</h2>
      <button onClick={() => handlerChange(false)}>Register</button>
      <button onClick={() => handlerChange(true)}>Login</button>
      {isInLogin ? <LogIn></LogIn> : <Register></Register>}
    </>
  );
}
export default Home;
