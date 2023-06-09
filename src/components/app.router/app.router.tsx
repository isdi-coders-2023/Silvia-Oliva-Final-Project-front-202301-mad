import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { MenuOption } from "../app/app";

const Home = lazy(() => import("../home/home"));
const Register = lazy(() => import("../register/register"));
const Login = lazy(() => import("../login/login"));
const Gallery = lazy(() => import("../gallery/gallery"));
const Details = lazy(() => import("../details/toy.details"));
type AppRouterProps = {
  menuOptions: MenuOption[];
};
export function AppRouter({ menuOptions }: AppRouterProps) {
  return (
    <Suspense>
      <Routes>
        <Route path={"/"} element={<Home></Home>}></Route>
        <Route path={"/home"} element={<Home></Home>}></Route>
        <Route path={"/register"} element={<Register></Register>}></Route>
        <Route path={"/login"} element={<Login></Login>}></Route>
        <Route path={"/gallery"} element={<Gallery></Gallery>}></Route>
        <Route path={"/details"} element={<Details></Details>}></Route>
      </Routes>
    </Suspense>
  );
}
