import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { MenuOption } from "../app/app.js";

const Home = lazy(() => import("../home/home"));
const Gallery = lazy(() => import("../gallery/gallery"));

type AppRouterProps = {
  menuOptions: MenuOption[];
};

export function AppRouter({ menuOptions }: AppRouterProps) {
  return (
    <Suspense>
      <Routes>
        <Route path={"/"} element={<Home></Home>}></Route>
        <Route path={menuOptions[0].path} element={<Home></Home>}></Route>
        <Route path={menuOptions[1].path} element={<Gallery></Gallery>}></Route>
      </Routes>
    </Suspense>
  );
}
