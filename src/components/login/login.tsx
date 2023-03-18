/* eslint-disable jsx-a11y/no-redundant-roles */
import { SyntheticEvent, useMemo } from "react";
import { useUsers } from "../../hooks/use.users";
import { User } from "../../model/user";
import { UsersRepo } from "../../services/user.repo";
import { Link } from "react-router-dom";
export default function LogIn() {
  const repo = useMemo(() => new UsersRepo(), []);
  const { userLogin } = useUsers(repo);

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    const formData = event.currentTarget as HTMLFormElement;
    const inputs = formData.querySelectorAll("input");
    const newUser: Partial<User> = {
      email: inputs[0].value,
      passwd: inputs[1].value,
    };
    userLogin(newUser);
    formData.reset();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          id="email"
          required
          placeholder="Email"
        />
        <input
          type="password"
          name="password"
          id="password"
          required
          placeholder="Password"
        />
        <button type="submit">Login</button>
        <div>
          <Link to="/register">Register</Link>
        </div>
      </form>
    </div>
  );
}
