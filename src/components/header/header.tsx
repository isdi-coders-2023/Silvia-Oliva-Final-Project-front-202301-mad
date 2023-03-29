import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import styles from "./header.module.scss";
type HeaderProps = { children: JSX.Element };

export function Header({ children }: HeaderProps) {
  const email = useSelector((state: RootState) => state.users.userLogged.email);

  return (
    <header className={styles.header}>
      <div className="header__userLoggedInitial">{email}</div>
      <div className={styles.container}>
        <h1 className={styles.tittle}>Amigurumis</h1>
        {children}
        <img
          className={styles.logo}
          src="../../../../asset/logo.png"
          alt="logo"
        />
      </div>
    </header>
  );
}
