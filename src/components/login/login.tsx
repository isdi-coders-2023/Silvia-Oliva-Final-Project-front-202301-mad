/* eslint-disable jsx-a11y/no-redundant-roles */
import { SyntheticEvent, useMemo } from "react";
import { useUsers } from "../../hooks/use.users";
import { User } from "../../model/user";
import { UsersRepo } from "../../services/user.repo";
import styles from "./login.module.scss";
export function LogIn() {
  const repo = useMemo(() => new UsersRepo(), []);

  const { userLogin } = useUsers(repo);

  const handleSubmit = (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formUSer = event.currentTarget;

    const loginForm: Partial<User> = {
      email: (formUSer.elements[0] as HTMLFormElement).value,
      passwd: (formUSer.elements[1] as HTMLFormElement).value,
    };

    userLogin(loginForm);
  };

  return (
    <div className={styles.login}>
      <h2>Login</h2>
      <p className="type-in">Type in your registered credentials.</p>

      <form onSubmit={handleSubmit}>
        <input type="text" name="email" placeholder="Email" required />
        <input type="password" placeholder="Password:" required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LogIn;
