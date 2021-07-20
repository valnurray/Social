import React from "react";
import  classes from "./Post.module.css"



const Post = (props) => {
  return (      
  
    <div className={classes.item}>
      <img src="https://st.depositphotos.com/1898481/5087/i/600/depositphotos_50878063-stock-photo-people.jpg" />
      {props.message}

      <div>
        <span>like</span> {props.like}
      </div>

    </div>
  );




}

export default Post;