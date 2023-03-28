/* eslint-disable jsx-a11y/no-redundant-roles */
import { SyntheticEvent, useMemo } from "react";
import { useUsers } from "../../hooks/use.users";
import { useNavigate } from "react-router-dom";
import { User } from "../../model/user";
import { UsersRepo } from "../../services/user.repo";
import styles from "./login.module.scss";
import { useToys } from "../../hooks/use.toys";
import { ToysApiRepo } from "../../services/toys.api.repo";
export function Login() {
  const repoUsers = useMemo(() => new UsersRepo(), []);
  const repoToys = useMemo(() => new ToysApiRepo(), []);
  const { userLogin } = useUsers(repoUsers);
  const { gallery } = useToys(repoToys);
  const navigate = useNavigate();

  const handleSubmit = (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formUSer = event.currentTarget;

    const loginForm: Partial<User> = {
      email: (formUSer.elements[0] as HTMLFormElement).value,
      passwd: (formUSer.elements[1] as HTMLFormElement).value,
    };

    userLogin(loginForm);
    gallery();
  };

  navigate("/gallery");
  return (
    <div className={styles.login}>
      <h2>Login</h2>
      <p className="type-in">Type in your registered credentials.</p>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="email"
          data-testid="email"
          placeholder="Email"
          required
        />
        <input
          type="password"
          data-testid="passwd"
          placeholder="Passwd:"
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
