import React from "react";
import { AppRouter } from "../app.router/app.router";
import { Header } from "../header/header";
import { Menu } from "../menu/menu";

export type MenuOption = {
  label: string;
  path: string;
};
export const menuOptions: MenuOption[] = [
  { label: "Login", path: "/login" },
  { label: "Register", path: "/register" },
  { label: "Home", path: "/home" },
  { label: "Gallery", path: "/gallery" },
  { label: "Details", path: "/details" },
];

export function App() {
  return (
    <>
      <div>
        <Header>
          <Menu options={menuOptions}></Menu>
        </Header>
        <AppRouter menuOptions={menuOptions}></AppRouter>
      </div>
    </>
  );
}
export default App;
