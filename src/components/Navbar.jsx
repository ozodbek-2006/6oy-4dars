import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <Link to="/" className={location.pathname === "/" ? "active" : ""}>
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/blog"
            className={location.pathname === "/blog" ? "active" : ""}
          >
            Blog
          </Link>
        </li>
        <li>
          <Link
            to="/work"
            className={location.pathname === "/work" ? "active" : ""}
          >
            Works
          </Link>
        </li>
      </ul>
    </nav>
  );
}
