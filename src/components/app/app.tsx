import React from "react";
import { AppRouter } from "../app.router/app.router";
import { Header } from "../header/header";
import { Menu } from "../menu/menu";
import "./app.css";

export type MenuOption = {
  label: string;
  path: string;
  image?: string;
};
export const menuOptions: MenuOption[] = [
  { label: "Home", path: "/home" },
  { label: "Gallery", path: "/gallery" },
];

export function App() {
  return (
    <>
      <Header>
        <Menu options={menuOptions}></Menu>
      </Header>
      <AppRouter menuOptions={menuOptions}></AppRouter>
    </>
  );
}

export default App;
