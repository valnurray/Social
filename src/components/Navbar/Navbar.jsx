import React from "react";
import classes from "./Navbar.module.css";
import Items from "./Items/Items";

const Navbar = () => {
    return  <nav className= {classes.nav}>
      <div className = {classes.item}>
        <a>Profile</a>
      </div>

      <Items/>

    </nav>
}

export default Navbar;