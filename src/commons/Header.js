import { Link, useMatch, useResolvedPath, LinkProps } from "react-router-dom";
import "../assets/scss/Header.scss";

function CustomLink({ children, to, ...props }: LinkProps) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <>
      <Link className={match ? "active" : ""} to={to} {...props}>
        {children}
      </Link>
    </>
  );
}

function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <ul className="nav">
          <li>
            <CustomLink to="./">Home</CustomLink>
          </li>
          <li>
            <CustomLink to="./about">About</CustomLink>
          </li>
          <li>
            <CustomLink to="./todo">Todo</CustomLink>
          </li>
          <li>
            <CustomLink to="./fetch">Fetch API</CustomLink>
          </li>
          <li>
            <CustomLink to="./mp3">MP3</CustomLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
