/* eslint-disable jsx-a11y/no-redundant-roles */
import { SyntheticEvent, useMemo } from "react";
import { useUsers } from "../../hooks/use.users";
import { UserStructure } from "../../model/user";
import { UsersRepo } from "../../services/user.repo";
import styles from "./register.module.scss";
export function Register() {
  const repo = useMemo(() => new UsersRepo(), []);

  const { userRegister } = useUsers(repo);

  const handlerSubmit = (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formUser = event.currentTarget;

    const registerForm: Partial<UserStructure> = {
      email: (formUser.elements[0] as HTMLFormElement).value,
      passwd: (formUser.elements[1] as HTMLFormElement).value,
    };

    userRegister(registerForm);
  };

  return (
    <div className={styles.register}>
      <h2>Register</h2>
      <form data-testid="form" onSubmit={handlerSubmit}>
        <div>
          <p>Email register:</p>
          <input
            type="text"
            placeholder="email"
            className="register-form__field"
            name="email"
          />
        </div>
        <div>
          <p>Password:</p>
          <input
            type="text"
            placeholder="Password"
            className="register-form__field"
            name="passwd"
          />
        </div>

        <button>Register</button>
      </form>
    </div>
  );
}

export default Register;
