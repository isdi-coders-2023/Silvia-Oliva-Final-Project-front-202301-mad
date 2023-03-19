import "./header.css";

type HeaderProps = { children: JSX.Element };

export function Header({ children }: HeaderProps) {
  return (
    <header>
      <h1 className="header__title">Amigurumis</h1>
      {children}
    </header>
  );
}
