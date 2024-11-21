import { Link,NavLink } from "react-router-dom";
import logo from "../img/react-logo.svg";


const Navbar = () => {
  return (
    <nav className="navWrapper">
      <div>
        <Link to="/">
          <img src={logo} alt="img" className="logo"/>
        </Link>
      </div>
      <ul className="naviWrapper">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/personnel">Personnel</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contacts</NavLink>
        </li>
      </ul>
        
    </nav>
  )
}

export default Navbar;
