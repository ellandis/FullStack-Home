import { useState } from "react";
import "./Navbar.css";
import {Link,NavLink  } from "react-router-dom";

const Navbar = () => {
  const [show,setShow] = useState(true);

  const toggleMenu = ()=>{
    setShow(!show);
  }
  return (
    <nav className="navWrapper">
      <div>
        <Link to='/'>
        <i>{"<ELL/>"}</i>
        <span>Recipe</span>
        </Link>
      </div>
      <div className={show ? "linkWrapper show" : "linkWrapper"}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="about">About</NavLink>
        <NavLink to="login">Login</NavLink>
      </div>
      <div className="burgerMenu" onClick={toggleMenu}>
        &#9776;
      </div>
    </nav>
  )
}

export default Navbar;
