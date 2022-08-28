import { Link } from "react-router-dom";
import './navbar.css'
const  Navbar= () => {
    return ( 
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark p-4 ">
                <div class="container-fluid">
                    <Link to="/home" className="navbar-brand fs-1 ms-5">Navbar</Link>
                        <div class="collapse navbar-collapse justify-content-end pe-5" id="navbarNav">
                            <ul class="navbar-nav  fs-4 ">
                                <li class="nav-item">
                                    <Link to="/home" className="nav-link active me-2">Home</Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link to="/counter" className="nav-link active me-2">Counter</Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link to="/about" className="nav-link active me-2">About</Link>
                                            </li>
                                            <li class="nav-item">
                                            <Link to="/signup" className="nav-link active me-2">SignUp</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </nav>
                        </div>
     );
}
 
export default Navbar;