import loader from "../../assets/images/loader.gif";
import React from "react";

let Preloader = (props) => {
    return  <div>
        <img style={{width: "50px",  position: "center"}} src={loader}/>
    </div>
}

export default Preloader;