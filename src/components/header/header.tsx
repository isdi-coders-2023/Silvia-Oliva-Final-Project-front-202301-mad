type HeaderProps = { children: JSX.Element };

export function Header({ children }: HeaderProps) {
  return (
    <header>
      {children}
      <h1>Amigurumis</h1>
    </header>
  );
}
