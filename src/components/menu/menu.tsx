import { Link } from "react-router-dom";
import { MenuOption } from "../app/app";
import "./menu.module.scss";

export type MenuProps = {
  options: MenuOption[];
};

export function Menu({ options }: MenuProps) {
  return (
    <nav>
      <ul>
        {options.map((item) => (
          <li key={item.label}>
            <Link to={item.path}>
              <p>{item.label}</p>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
