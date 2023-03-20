import { Link } from "react-router-dom";
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
          <li key={item.label}>
            <Link to={item.path}>
              <img className="start" src={item.image} alt={item.label} />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
