/* eslint-disable jsx-a11y/no-redundant-roles */
import { SyntheticEvent, useMemo } from "react";
import { useUsers } from "../../hooks/use.users";
import { User } from "../../model/user";
import { UsersRepo } from "../../services/user.repo";

export function Register() {
  const repo = useMemo(() => new UsersRepo(), []);

  const { userRegister } = useUsers(repo);

  const handlerSubmit = (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formUser = event.currentTarget;

    const registerForm: Partial<User> = {
      email: (formUser.elements[0] as HTMLFormElement).value,
      passwd: (formUser.elements[1] as HTMLFormElement).value,
    };
    userRegister(registerForm);
  };

  return (
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
    </form>
  );
}
