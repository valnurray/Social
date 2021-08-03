import React from "react";
import classes from "./Header.module.css";
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return <header className= {classes.header}>
        <img src="https://st2.depositphotos.com/1823350/5325/v/600/depositphotos_53259361-stock-illustration-transparent-blue-glass-sphere-with.jpg" />
        <div className={classes.loginBlock}>
            {props.isAuth ? props.login +"" : <NavLink to={"/login"}>Login</NavLink>}
        </div>
    </header>
}

export default Header;