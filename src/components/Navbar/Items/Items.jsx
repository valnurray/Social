import React from "react";
import classes from "./Items.module.css";

const Items = () => {
    return  <div>
    
    <div className = {classes.item}>
        <a>Messages</a>
      </div>

      <div className = {classes.item}>
        <a>News</a>
      </div>

      <div className = {classes.item}>
        <a>Music</a>
      </div>

      <div className = {classes.item}>
        <a>Settings</a>
      </div>
    </div>
}

export default Items;