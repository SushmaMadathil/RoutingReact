import React from "react";
import { Link, NavLink, withRouter } from "react-router-dom";

const Navbar = props => {
  //after adding the higher order component the withRouter from the react-router-dom library we will be able to see the property value of nav
  //after passing props in this function console.log(props) will give the desired values.
  /*setTimeout(() => {
    props.history.push("/about");
  }); //this function will also give the desired value.*/
  return (
    <nav className="nav-wrapper red darken-3">
      <div className="container">
        <a className="brand-logo" href="/">
          Poke' Times
        </a>
        <ul className="right">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default withRouter(Navbar);
