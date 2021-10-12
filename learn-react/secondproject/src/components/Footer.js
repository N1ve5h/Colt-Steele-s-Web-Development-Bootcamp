import { Link } from "react-router-dom";
import { useLocation } from "react-router";

export default function Footer() {
  const footerlocation = useLocation();

  return (
    <>
      {footerlocation.pathname === "/" && (
        <footer>
          <p>Copyright &copy; 2021</p>
          <Link to="/about">About</Link>
        </footer>
      )}
    </>
  );
}
