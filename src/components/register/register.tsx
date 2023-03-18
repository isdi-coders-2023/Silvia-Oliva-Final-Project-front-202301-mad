/* eslint-disable jsx-a11y/no-redundant-roles */
import { SyntheticEvent, useMemo } from "react";
import { Link } from "react-router-dom";
import { useUsers } from "../../hooks/use.users";
import { User } from "../../model/user";
import { UsersRepo } from "../../services/user.repo";

export default function Register() {
  const repo = useMemo(() => new UsersRepo(), []);

  const { userRegister } = useUsers(repo);

  const handlerSubmit = (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = event.currentTarget as HTMLFormElement;
    const inputs = formData.querySelectorAll("input");

    const newUser: Partial<User> = {
      email: inputs[0].value,
      passwd: inputs[1].value,
    };
    userRegister(newUser);
    formData.reset();
  };
  return (
    <div>
      <form onSubmit={handlerSubmit}>
        <label>
          email toys
          <input type="email" name="email" required />
        </label>
        <label>
          password
          <input type="password" name="password" role="textbox" required />
        </label>

        <button type="submit">Register</button>
        <div>
          <Link to="/login">Login</Link>
        </div>
      </form>{" "}
    </div>
  );
}
