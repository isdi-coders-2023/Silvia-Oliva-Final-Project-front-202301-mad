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
      <div>
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
