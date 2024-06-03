import { Link, useLocation } from "react-router-dom";
import "./Navbar.module.css";
const Navigation = () => {
  const location = useLocation();
  return (
    <>
      <div>
        <div>
          {location.pathname !== "/" ? (
            <>
              <Link to="/"> Home </Link>
            </>
          ) : (
            <>
              <div>
                <nav>
                  <ul>
                    <li>
                      <Link to="/login">Login</Link>
                    </li>
                    <li>
                      <Link to="/product">Product</Link>
                    </li>
                    <li>
                      <Link to="/category">Category</Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Navigation;
