import { MenuOption } from "../app/app";
import "./menu.css";

type MenuProps = {
  options: MenuOption[];
};

export function Menu({ options }: MenuProps) {
  return (
    <nav>
      <ul>
        {options.map((item) => (
          <li key={item.label}></li>
        ))}
      </ul>
    </nav>
  );
}
