import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import styles from "./header.module.scss";
type HeaderProps = { children: JSX.Element };

export function Header({ children }: HeaderProps) {
  const firstName = useSelector(
    (state: RootState) => state.users.userLogged.email
  );
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Home</h1>
      <div className={styles.images}>
        <img src="../../../../asset/logo.png" alt="logo" />
      </div>
    </header>
  );
}
//   return (
//     <header className="header header-error">
//       <img
//         src="../../../../assets/header/logo.png"
//         className="header__logo"
//         alt="Logo de pokemon"
//       ></img>
//       <img
//         src="../../../../assets/menu/pokeball.png"
//         className="menu-ball"
//         alt=""
//       />

//       {children}
//     </header>
//   );
// }
