import React from "react";
import classes from "./Navbar.module.css";
import Items from "./Items/Items";

const Navbar = () => {
    return <nav className={classes.nav}>

        <Items/>

    </nav>
}

export default Navbar;