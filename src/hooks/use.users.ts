import { useDispatch, useSelector } from "react-redux";
import { UserStructure } from "../model/user";
import { UsersRepo } from "../services/user.repo";
import { AppDispatch, RootState } from "../store/store";
import { loginToken, loginUser } from "../reducer/users.slice";

export function useUsers(repo: UsersRepo) {
  const userLogged = useSelector((state: RootState) => state.users);
  const token = useSelector((state: RootState) => state.users);
  const dispatch = useDispatch<AppDispatch>();

  const userRegister = async (registerForm: Partial<UserStructure>) => {
    try {
      console.log(registerForm);
      await repo.create(registerForm, "users/register");
      // dispatch(register(infoUser.results[0]));
    } catch (error) {
      console.log((error as Error).message);
    }
  };

  const userLogin = async (loginForm: Partial<UserStructure>) => {
    try {
      const tokensResponse: any = await repo.login(loginForm, "users/login");
      console.log(tokensResponse);
      dispatch(loginToken(tokensResponse.results[0]));
      dispatch(loginUser(tokensResponse.results[1]));
    } catch (error) {}
  };

  return {
    userLogged,
    token,
    userLogin,
    userRegister,
  };
}
