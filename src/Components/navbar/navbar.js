import { Link } from "react-router-dom";
import "./navbar.css";
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-4 ">
        <div className="container-fluid">
          <Link to="/home" className="navbar-brand fs-1 ms-5">
            Navbar
          </Link>
          <div
            className="collapse navbar-collapse justify-content-end pe-5"
            id="navbarNav"
          >
            <ul className="navbar-nav  fs-4 ">
              <li className="nav-item">
                <Link to="/home" className="nav-link active me-2">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/counter" className="nav-link active me-2">
                  Counter
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link active me-2">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/signup" className="nav-link active me-2">
                  SignUp
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
